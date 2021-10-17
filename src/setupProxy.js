const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    "/Product",
    createProxyMiddleware({
      target: "http://www.yes24.com",
      changeOrigin: true,
    })
  );

  app.use(
    "/SearchCorner",
    createProxyMiddleware({
      target: "http://www.yes24.com",
      changeOrigin: true,
    })
  );
};
