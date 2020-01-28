const express = require("express");
const app = express();
const config = require("./config");

const proxy = require("express-http-proxy");

const allowFromAll = function(headers) {
  return { ...headers, "Access-Control-Allow-Origin": "*" };
};

config.proxies.forEach(proxyData => {
  app.use(
    `/${proxyData.alias}`,
    proxy(proxyData.url, {
      userResHeaderDecorator: allowFromAll
    })
  );
});

app.listen(config.port);
