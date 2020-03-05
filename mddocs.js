/**
 * This file is part of the Ingram Micro Cloud Blue Connect SDK.
 *
 * @copyright (c) 2019. Ingram Micro. All Rights Reserved.
 */

const { promisify } = require('util');
const { spawn } = require('child_process');
const exec = promisify(require('child_process').exec);
const fs = require('fs');

const jsdoc2md = require('jsdoc-to-markdown');

const pfs = {
  exists: promisify(fs.exists),
  mkdir: promisify(fs.mkdir),
  readdir: promisify(fs.readdir),
  copyFile: promisify(fs.copyFile),
  readFile: promisify(fs.readFile),
  writeFile: promisify(fs.writeFile),
  unlink: promisify(fs.unlink),
};

const path = require('path');

const jsDocConfig = require('./jsdoc.config');

const config = require('./mddocs.config');


const init = async () => {
  if (!(await pfs.exists(config.destPath))) {
    await pfs.mkdir(config.destPath);
  } else {
    const files = await pfs.readdir(config.destPath);
    files.forEach(async (f) => {
      await pfs.unlink(path.join(config.destPath, f));
    });
  }
};

const getCurrentBranchName = async () => {
  if (process.env.TRAVIS_BRANCH) {
    return process.env.TRAVIS_BRANCH;
  }
  const { stdout } = await exec('git rev-parse --abbrev-ref HEAD');
  return stdout;
};

const getUrlPrefix = async () => {
  const bs = config.urlPrefix.endsWith('/') ? '' : '/';
  let currentBranch = await getCurrentBranchName();
  currentBranch = currentBranch.replace(/\r?\n|\r/g, '');
  return `${config.urlPrefix}${bs}${path.join(currentBranch, config.destPath)}/`;
}



const copyStatics = async () => {
  let idx = 0;
  const static = {};
  if (jsDocConfig.opts && jsDocConfig.opts.readme) {
    const fileName = `${('' + idx).padStart(3, '0')}_${jsDocConfig.opts.readme}`.replace(' ', '_');
    const srcFile = path.join('./', jsDocConfig.opts.readme);
    pfs.copyFile(
      srcFile,
      path.join(config.destPath, fileName),
    );
    static[config.homeTitle] = {
      name: config.homeTitle,
      category: 'Home',
      file: srcFile,
      idx: '' + idx,
      outputFileName: fileName,
    };
    idx++;
  }
  if (jsDocConfig.opts && jsDocConfig.opts.tutorials) {
    const files = await pfs.readdir(jsDocConfig.opts.tutorials);
    for (let el of files) {
      if (el.endsWith('.json')) {
        const data = await pfs.readFile(path.join(jsDocConfig.opts.tutorials, el));
        const tutInfo = JSON.parse(data.toString());
        const mdFile = `${path.basename(el, path.extname(el))}.md`;
        const fileName = `${('' + idx).padStart(3, '0')}_${mdFile}`.replace(' ', '_');
        const srcFile = path.join(jsDocConfig.opts.tutorials, mdFile);
        pfs.copyFile(
          srcFile,
          path.join(config.destPath, fileName),
        );
        static[tutInfo.title] = {
          name: tutInfo.title,
          category: 'Tutorials',
          file: srcFile,
          idx: '' + idx,
          outputFileName: fileName,
        };
        idx++;
      }
    }
  }
  return {
    idx,
    static,
  };
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


const parse = async (idx, data) => {
  const collected = {};
  const results = {};
  data.forEach((el) => {
    if (config.objTypes.includes(el.kind)) {
      const objType = el.kind.charAt(0).toUpperCase() + el.kind.slice(1);
      if (!collected[el.category]) {
        collected[el.category] = [];
      }
      collected[el.category].push({
        name: `${objType} ${el.name}`,
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

const generateFileNamesAndUrls = async (data) => {
  const urlPrefix = await getUrlPrefix();
  Object.keys(data).forEach((k) => {
    const filename = `${data[k].idx.padStart(3, '0')}_${k}.md`.replace(' ', '_');
    data[k].outputFileName = filename;
    data[k].url = `${urlPrefix}${filename}`;
  });
  return data;
};

const generateMarkdown = async (data) => {
  Object.keys(data).forEach(async (k) => {
    const obj = data[k];
    if (obj.file.endsWith('.js')) {
      const rendered = await jsdoc2md.render({ files: obj.file });
      await pfs.writeFile(
        path.join(config.destPath, obj.outputFileName),
        rendered,
      );
    }
  });
};

const generateReport = async (info) => {
  await pfs.writeFile(
    path.join(config.destPath, 'report.json'),
    JSON.stringify({
      generated: new Date(),
      pages: Object.values(info),
    }, null, 4));
}

const run = async () => {
    await init();
    const { idx, static } = await copyStatics();
    const { stdout } = await generateJsdocJson();
    const data = JSON.parse(stdout);
    const parsed = await parse(idx, data);
    const merged = { ...static, ...parsed };
    const info = await generateFileNamesAndUrls(merged);
    await generateMarkdown(info);
    await generateReport(info);
};

run()
  .then(() => console.log('Markdown documentation generated!'))
  .catch((e) => console.log('Cannot generate docs: ', e));
