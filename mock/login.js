function Login(req, res) {
  res.send({status: 0})
}

function Logout(req, res) {
  res.send({status: 0})
}

export default {
  // 支持值为 Object 和 Array

  'POST /api/login/user/': Login,

  'POST /api/logout/user/': Logout,
  // GET POST 可省略
  // '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  // 'POST /api/users/create': (req, res) => { res.end('OK'); },
};
