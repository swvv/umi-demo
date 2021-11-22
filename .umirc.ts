import { defineConfig } from 'umi';

export default defineConfig({
  antd: {
    dark: false,
    // https://ant.design/components/config-provider-cn/
    config: {
      componentSize: 'Middle',
    },
  },
  // base: '/some',
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index', title: 'Index' },
  //   { path: '/about', component: '@/pages/about', title: 'About' },
  // ],
  fastRefresh: {},
  alias: {
    component: require.resolve('./src/components'),
  },
  dynamicImport: {},
  favicon: './favicon.png',
  proxy: {
    '/get': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/get' : '' },
    },
  },
  dva: {
    immer: true,
    // hmr: false,
  },
  mfsu: {},
  // chainWebpack(config) {
  //   config
  //     .plugin('antd-dayjs-webpack-plugin')
  //     .use('antd-dayjs-webpack-plugin')
  //     .end();
  // }
});
