const express = require("express");
const router = express.Router();

// 测试用例接口

router.get("/test", (req, res) => {
  res.send({
    code: 0,
    data: {},
    msg: "测试请求成功！",
  });
});

module.exports = router;
