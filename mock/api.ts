import Mock from 'mockjs';
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET 可忽略
  '/api/users/1': Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 10,
        // 'name|1-3': {
        //   first: '@FIRST',
        //   middle: '@FIRST',
        //   last: '@LAST',
        //   full: '@first @middle @last',
        // },
        'name': '@str',
        'age|2-20': 111,
        'sex|1': true,
        regexp1: /\d{5,10}/,
      },
    ],
  }),

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req: any, res: any) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
