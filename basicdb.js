const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mssql = require('mssql');
const productsRouter = require('./routes/products');

app.use(bodyParser.json());

// Database configuration
const config = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server',
  database: 'your_database',
  options: {
    enableArithAbort: true,
  },
};

// Connect to the database
mssql.connect(config)
  .then(() => console.log('Connected to SQL Server'))
  .catch(err => console.error('Error connecting to SQL Server', err));

app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
