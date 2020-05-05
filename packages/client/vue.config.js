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

  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'TodoApp';
        return args;
      });
  },

  transpileDependencies: [
    'vuetify',
  ],
};
