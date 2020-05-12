const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Demoo! to Hell0 from Cloud Paks!!");
});
 
module.exports.app = app;
