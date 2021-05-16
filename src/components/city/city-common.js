import Data from "./city-code.json";

export default {
  currentListKey: 'current-city-list',
  currentKey: 'current-city',
  cityCache: 'city-cache',
  getApiID: function (city) {
    let caches = JSON.parse(localStorage.getItem(this.cityCache));
    if (caches.length > 0) {
      for (let cache of caches) {
        if (cache.name === city) return cache.id;
      }
    }
    const provinces = Data.China.province;
    for (let p of provinces) {
      for (let c of p.city) {
        for (let t of c.county) {
          if (t['@name'] === city) {
            caches.push({ name: city, id: t['@weatherCode'] });
            localStorage.setItem(this.cityCache, JSON.stringify(caches));
            return t['@weatherCode'];
          }
        }
      }
    }
  }
}