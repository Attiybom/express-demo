const express = require("express");
const router = express.Router();

//用户登录的接口
router.post("/login", (req, res) => {
  const body = req.body;
  res.send({
    code: 0, // 0代表成功，1代表失败
    data: body,
  });
});

module.exports = router;

// module.exports = [
//   // 登录接口
//   {
//     url: '/login',
//     method: 'post',
//     response() {
//       return {
//         code: 0,
//         data: ''
//       }
//     }
//   }
// ]
