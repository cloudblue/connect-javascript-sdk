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
    cleverLinks: false,
    monospaceLinks: false,
    default: {
      staticFiles: {
        include: [
          './docs-src/statics',
        ],
      },
      outputSourceFiles: false,
      includeDate: false,
    },
    'better-docs': {
      name: 'CloudBlue Connect Javascript SDK',
      logo: 'images/connect_logo_fullname.png',
      homeTitle: 'Welcome!',
      hideGenerator: false,
      navigation: [
        {
          label: 'Github',
          href: 'https://github.com/cloudblue/connect-javascript-sdk',
        },
        {
          label: 'CloudBlue Connect',
          href: 'https://www.cloudblue.com/connect/',
        },
      ],
    },
  },
  tags: {
    allowUnknownTags: true,
  },
  plugins: [
    'plugins/markdown',
    'better-docs/category',
  ],
  opts: {
    template: 'better-docs',
    recurse: true,
    verbose: true,
    readme: 'README.md',
    destination: './dist',
    tutorials: './docs-src/tutorials',
  },
};
