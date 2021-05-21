const express = require('express');
const axios = require('axios');
const cityApi = require('./city-api-util');
const port = 9202;
const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/api/tianqiapi', (req, res, next) => {
  const cityid = req.query.cityid;
  console.log(`${new Date().toUTCString()} cityid=${cityid}`);
  axios.get(cityApi.getTianqiapiURL(cityid)).then(r => {
    res.send(r.data);
    next();
  }).catch(e => console.error(e));
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
