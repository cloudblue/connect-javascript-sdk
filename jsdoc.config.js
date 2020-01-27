module.exports = {
  source: {
    include: ['lib', 'README.md'],
    exclude: [
      'lib/connect/ops/index.js',
      'lib/connect/api/index.js',
    ],
    includePattern: '.+\\.js(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_',
  },
  templates: {
    systemName: 'CloudBlue Connect Javascript SDK',
    sort: true,
    collapseSymbols: true,
    outputSourceFiles: false,
    outputSourcePath: false,
    theme: 'flatly',
    copyright: 'CloudBlue Connect',
  },
  tags: {
    allowUnknownTags: true,
  },
  plugins: [
    'plugins/markdown',
  ],
  opts: {
    template: 'node_modules/foodoc/template',
    recurse: true,
    destination: './dist',
  },
};
