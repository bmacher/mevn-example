// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['js', 'ts'],
      alias: {
        '@mevn/common': path.resolve(__dirname, '../common/src/index.ts'),
      },
    },
  },
};
