const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Products');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching products', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO Products (Name) VALUES (@name)', {
      name: name,
    });
    res.json(result.recordset[0]);
  } catch (error) {
    console.error('Error adding product', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
