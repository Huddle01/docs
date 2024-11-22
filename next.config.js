const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true,
  },
  staticImage: true,
});

module.exports = withNextra({
  basePath: '/docs',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
        basePath: false,
      },
    ];
  },
});
