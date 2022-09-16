import mysql from 'mysql2';
require('dotenv').config()

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: process.env.DB_PASS,
  database: 'departments'
});



export default {db};
