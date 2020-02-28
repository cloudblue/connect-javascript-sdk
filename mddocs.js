/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const { promisify } = require('util');
const { spawn } = require('child_process');
const fs = require('fs');

const jsdoc2md = require('jsdoc-to-markdown');

const pfs = {
  exists: promisify(fs.exists),
  mkdir: promisify(fs.mkdir),
  readdir: promisify(fs.readdir),
  copyFile: promisify(fs.copyFile),
  writeFile: promisify(fs.writeFile),
  unlink: promisify(fs.unlink),
};

const path = require('path');

const jsDocConfig = require('./jsdoc.config');


const OBJ_TYPES = [
  'class',
];

const init = async () => {
  if (!(await pfs.exists('./mddocs'))) {
    await pfs.mkdir('./mddocs');
  } else {
    const files = await pfs.readdir('./mddocs');
    files.forEach(async (f) => {
      await pfs.unlink(path.join('./mddocs', f));
    });
  }
};

const copyStatics = async () => {
  let idx = 0;
  if (jsDocConfig.opts && jsDocConfig.opts.readme) {
    const fileName = `${('' + idx).padStart(3, '0')}_${jsDocConfig.opts.readme}`;
    pfs.copyFile(
      path.join('./', jsDocConfig.opts.readme),
      path.join('./mddocs', fileName),
    );
    idx++;
  }
  if (jsDocConfig.opts && jsDocConfig.opts.tutorials) {
    const files = await pfs.readdir(jsDocConfig.opts.tutorials);
    files.forEach((el) => {
      if (el.endsWith('.md')) {
        const fileName = `${('' + idx).padStart(3, '0')}_${el}`;
        pfs.copyFile(
          path.join(jsDocConfig.opts.tutorials, el),
          path.join('./mddocs', fileName),
        );
        idx++;
      }
    });
  }
  return idx;
};

const generateJsdocJson = () => new Promise((resolve, reject) => {
  let stdout = '';
  let stderr = '';
  const child = spawn('jsdoc', ['-c', 'jsdoc.config.js', '-X']);
  child.on('error', (err) => {
    console.log(err);
    reject(err);
  });
  child.stdout.on('data', (chunk) => {
    stdout += chunk.toString();
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });
  child.on('close', (exCode) => {
    if (exCode === 0) {
      resolve({ stdout, stderr });
    } else {
      reject(exCode, { stdout, stderr });
    }
  });
});


const parse = async (idx) => {
  const { stdout } = await generateJsdocJson();
  const data = JSON.parse(stdout);
  const collected = {};
  const results = {};
  data.forEach((el) => {
    if (OBJ_TYPES.includes(el.kind)) {
      if (!collected[el.category]) {
        collected[el.category] = [];
      }
      collected[el.category].push({
        name: el.name,
        category: el.category,
        file: path.join(el.meta.path, el.meta.filename),
      });
    }
  });
  Object.keys(collected).sort().forEach((el) => {
    collected[el].sort((a, b) => a.name > b.name).forEach(clz => {
      if (!Object.keys(results).includes(clz.name)) {
        clz.idx = '' + idx;
        idx++;
        results[clz.name] = clz;
      }
    });
  });
  return results;
};

const generateFileNames = (data) => {
  Object.keys(data).forEach((k) => {
    data[k].outputFileName = `${data[k].idx.padStart(3, '0')}_${k}.md`;
  });
  return data;
};

const generateMarkdown = async (data) => {
  Object.keys(data).forEach(async (k) => {
    const obj = data[k];
    const rendered = await jsdoc2md.render({ files: obj.file });
    await pfs.writeFile(
      path.join('./mddocs', obj.outputFileName),
      rendered,
    );
  });
};

const generateReport = async (info) => {
  await pfs.writeFile(
    './mddocs/report.json',
    JSON.stringify(Object.values(info), null, 4));
}

const run = async () => {
  await init();
  const idx = await copyStatics();
  const info = await generateFileNames(await parse(idx));
  await generateMarkdown(info);
  await generateReport(info);
};

run().then(() => console.log('Markdown documentation generated!'));
