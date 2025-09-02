const db = require('./utils/db');

async function test() {
  const result = await db.query('SELECT NOW()', []);
  console.log(result);
}

test();
