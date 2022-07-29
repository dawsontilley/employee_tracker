import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'DTet789t',
  database: 'departments'
});
db.connect();

export default {db};
