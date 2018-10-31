export default {
  // 支持值为 Object 和 Array
  'GET /api/resource/datacenter/': {item_list: [{"name": "东莞机房", "bandwidth": 1000, "address": "东莞", "create_time": "11", "update_time": '222', "key": 1}]},
  'GET /api/resource/cabinet/': {item_list: [{"name": "东莞机柜1", "remark": "测试机柜",  "create_time": "11", "update_time": '222', "key": 1}]},
  // GET POST 可省略
  // '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  // 'POST /api/users/create': (req, res) => { res.end('OK'); },
};
