import Sqlite3 from 'sqlite3';

let db = new Sqlite3.Database('city.db', e => {
  if (e) throw new Error(e);
});

export default db;