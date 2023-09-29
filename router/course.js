const express = require("express");
const router = express.Router();


// 课程查询的接口
router.get("/find", (req, res) => {
  const query  = req.query;
  res.send({
    code: 0,
    data: query,
  });
});

module.exports = router;
