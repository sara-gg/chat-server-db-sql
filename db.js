const fs = require('fs');
const { Pool } = require('pg')

const pool = new Pool({
  user: //,
  host: 'localhost',
  database: //,
  password: //,
  port: //
});

const db = {
  messages: []
}

fs.readFile('./data.json', 'utf8', (err, data) => {
  try {
    data = JSON.parse(data)
  } catch (banana) {
    console.log(banana);
  }

  if (data && data.messages) {
    db.messages = data.messages;
  }
})

setInterval(() => {
  fs.writeFile('./data.json', JSON.stringify(db), (err) => {
    if (err) console.log(err);
  })
}, 5000)

module.exports = db;
