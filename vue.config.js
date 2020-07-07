module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  devServer: {
    host: '0.0.0.0',
    port: '8030'
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/common/variable.scss";'
      }
    }
  },
  configureWebpack: config => {
    const configs = {};
    if (process.env.NODE_DEV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0];
      const terserOptions = terserWebpackPlugin.options.terserOptions;
      terserOptions.compress['drop_console'] = true;
      terserOptions.compress['drop_dugger'] = true;

      // 抽取共用chunks
      configs.optimization = {
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 3,
          cacheGroups: {
            libs: {
              name: 'chunk-vendors',
              test: /([\\/]node_modules[\\/])|(\.(scss|css)$)/,
              priority: 10,
              chunks: 'initial' // 只打包初始时依赖的第三方
            },
            elementUI: {
              name: 'element-ui',
              priority: 30,
              test: /[\\/]node_modules[\\/]element-ui[\\/]/
            }
          }
        }
      };
    }
    return configs;
  },

  transpileDependencies: ['element-ui/src', 'element-ui/packages']
};
