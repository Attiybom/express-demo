const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

// 第三方中间件，解析post请求数据
app.use(bodyParser.json());
/**
 * @description 需要设置{ extended: true }
 */
app.use(bodyParser.urlencoded({ extended: true }));

// 定义中间件
const middleware = (req, res, next) => {
  req.query = { first: "middleware" };
  console.log("middleware-start");
  next();
};

// 错误中间件
const catchErrMiddleWare = (err, req, res, next) => {
  if (err) {
    res.send(`catchErrMiddleWare - ${err.message}`);
  }
};

/**
 * @description test方法使用的局部中间件
 */
const middlewareTest = (req, res, next) => {
  console.log("middlewareTest-Start");
  next();
};

// 中间件调用需要放在路由前面
app.use(middleware);

/**
 * @description 必须要先调用json解析才能拿到json格式的请求体
 */
// app.use(express.json());

/**
 * @description 调用urlencoded可以解析raw的请求
 */
// app.use(express.urlencoded());

app.post("/login", (req, res) => {
  console.log("req", req.body);
  res.send("登录成功！");
});

// 局部中间件使用
app.get("/test", middlewareTest, (req, res) => {
  const method = req.method;
  res.send("测试成功！");
});

// 错误请求测试用例
app.use("/errorTest", (req, res, next) => {
  throw new Error("发生错误");
  res.send("错误发生测试用例");
});

// 使用捕获错误中间件
app.use(catchErrMiddleWare);

app.listen(5050, () => {
  console.log("express start");
});
