const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Demo! to Hell0 fro Cloud Paks!!");
});
 
module.exports.app = app;
