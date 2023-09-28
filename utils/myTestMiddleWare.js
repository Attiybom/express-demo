const qs = require("querystringify");

const myTestMiddleWare = (req, res, next) => {
  let msg = "";
  req.on("data", (val) => {
    msg += val;
  });

  req.on("end", () => {
    req.body = qs.parse(msg);
    next();
  });
};

module.exports = myTestMiddleWare;
