// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

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

// API endpoints
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM Products', (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send('Error fetching products');
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/products', (req, res) => {
  const { name, image } = req.body;
  db.query('INSERT INTO Products (name, image) VALUES (?, ?)', [name, image], (err, result) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send('Error adding product');
    } else {
      res.json({ id: result.insertId, name, image });
    }
  });
});

app.get('/api/products/:id', (req, res) => {
  const id = (link unavailable);
  db.query('SELECT * FROM Products WHERE id = ?', [id], (err, rows) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send('Error fetching product');
    } else {
      res.json(rows[0]);
    }
  });
});

app.put('/api/products/:id', (req, res) => {
  const id = 1;
  const { name, image } = req.body;
  db.query('UPDATE Products SET name = ?, image = ? WHERE id = ?', [name, image, id], (err, result) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send('Error updating product');
    } else {
      res.json({ id, name, image });
    }
  });
});

app.delete('/api/products/:id', (req, res) => {
  const id = 1;
  db.query('DELETE FROM Products WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('error running query:', err);
      res.status(500).send('Error deleting product');
    } else {
      res.send(`Product with id ${id} deleted`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});