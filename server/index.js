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

app.get('/api/sk', (req, res, next) => {
  const id = req.query.cityId;
  axios.get(cityApi.getWeatherDataURL(id)).then(r => {
    res.send(r.data.weatherinfo);
    next();
  }).catch(e => console.error(e));
});

app.get('/api/cityInfo', (req, res, next) => {
  const id = req.query.cityId;
  axios.get(cityApi.getCityInfoURL(id)).then(r => {
    res.send(r.data.weatherinfo);
    next();
  }).catch(e => console.error(e));
})

app.get('/api/15days', (req, res, next) => {
  const id = req.query.cityId;
  axios.get().then(r => {

    next();
  }).catch(e => console.error(e));
});

app.get('/api/muxiaoguo/today', (req, res, next) => {
  const city = decodeURI(req.query.city);
  axios.get(cityApi.getMuxiaoguoURL(city, 1)).then(r => {
    res.send(r.data.data);
    next();
  }).catch(e => console.error(e));
});

app.get('/api/muxiaoguo/7days', (req, res, next) => {
  const city = req.query.city;
  axios.get(cityApi.getMuxiaoguoURL(city, 2)).then(r => {
    res.send(r.data.data);
    next();
  }).catch(e => console.error(e));
});

app.get('/api/muxiaoguo/15days', (req, res, next) => {
  const city = req.query.city;
  axios.get(cityApi.getMuxiaoguoURL(city, 3)).then(r => {
    res.send(r.data.data);
    next();
  }).catch(e => console.error(e));
});

app.get('/api/tianqiapi', (req, res, next) => {
  const cityid = req.query.cityid;
  axios.get(cityApi.getTianqiapiURL(cityid)).then(r => {
    res.send(r.data);
    next();
  }).catch(e => console.error(e));
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
