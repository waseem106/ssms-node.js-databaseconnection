// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL connection
const db = mysql.createConnection({
  user: 'admin',
  password: '123',
  database: 'myDatabase'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

// API endpoint to retrieve data
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM Products', (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send('Error fetching data');
    } else {
      res.json(rows);
    }
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});