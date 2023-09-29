# 中间件的种类以及使用注意事项
## 种类
1. 内置中间件
2. 自定义中间件
3. 第三方中间件
4. 错误中间件
5. 应用级别中间件

## 使用注意事项
1. 错误中间件应放在最后注册使用
2. 局部中间件的使用，在需要调用局部中间件的路由中，以数组的形式放入第二个参数即可
``` js

```
3. 记得调用next
4. 中间件的req和res是共享的



# express的路由模块化
1. 建立router文件夹，其中不同的js文件就代表一个路由模块
2. /router/index.js => 统一导入导出
3. app.js 导入并且遍历调用router
```js
// 导入主路由
const apiRouter = require('./router/index')
const apiListLen = apiRouter.length
// 遍历调用路由
const apiRouter = require('./router/index')
for (let i = 0; i < apiListLen; i++) {
  app.use('/api', apiRouter[i]) // 统一假设/api前缀
}
```
4. 部分公共api，需要url前缀需要额外加上其他字符串，比如pub，这点以后再展开

# 跨域问题解决
1. 引入第三方库 cors
2. 原理 => 设置响应头 => 允许任何跨域
```js
res.header('Access-Control-Allow-Origin', '*')
```
