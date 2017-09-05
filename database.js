const sqlite3  = require('sqlite3');
const { children } = require('../data/children');
const db = new sqlite3.Database('acme.sqlite');
//grabbed from Joe's testing 101
function createTables() {
  db.run(`DROP TABLE IF EXISTS children`)
  .run(
    `CREATE TABLE IF NOT EXISTS children (
    children_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, toy TEXT)`,
    insertRows
    )
}

function insertRows() {  
  children.forEach( ({name, toy}) => {
    db.run(`INSERT INTO children VALUES (null, "${name}", "${toy}")`, () => {
      db.all(`SELECT children_id, name FROM children`, (err, data) => err ? `Error: ${err}` : console.log("children added"));
    });
  });
}

module.exports = { createTables };