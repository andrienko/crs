module.exports = {
  port: 31337,
  proxies: [
    {
      alias: "kurs",
      url: "http://mon-api.azurewebsites.net/mocks"
    }
  ]
};
