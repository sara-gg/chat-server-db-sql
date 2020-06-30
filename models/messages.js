const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'chat-db',
  port: 5432
});

async function getMessages () {
  const messages = await pool.query('SELECT content FROM messages');
  console.log('messages',messages);
  return messages.rows;
}

async function postMessage (message) {
  return await pool.query(`INSERT INTO messages (content, authorid, timestamp) VALUES ('${message.content}', ${message.authorId}, ${message.timestamp}) RETURNING *`);
}

module.exports = {
  getMessages,
  postMessage
}

// const getMessages = () => db.messages;
// const postMessage = (message) => db.messages.push(message);