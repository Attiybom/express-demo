const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// 导入接口
const apiRouter = require('./router/index')

// 第三方中间件，解析post请求数据
app.use(bodyParser.json());
/**
 * @description 需要设置{ extended: true }
 */
app.use(bodyParser.urlencoded({ extended: true }));

const apiListLen = apiRouter.length
// 遍历调用路由
for (let i = 0; i < apiListLen; i++) {
  app.use('/api', apiRouter[i])
}

// 使用捕获错误中间件
/**
 * @description 错误级别中间件应该放在最后注册
 */

app.listen(5050, () => {
  console.log("express start");
});
