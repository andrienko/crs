const express = require("express");
const app = express();
const config = require("./config");

const proxy = require("express-http-proxy");

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.all("/", function(req, res) {
  res.send("~ Silence is golden");
});

config.proxies.forEach(proxyData => {
  app.use(`/${proxyData.alias}`, proxy(proxyData.url));
});

app.all("/*", function(req, res) {
  res.status(418);
  res.json(config.proxies.map(proxy => proxy.alias));
});

app.listen(config.port);
