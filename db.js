const mssql = require('mssql');



// Database credentials
const connection =sql.createConnection({
host: 'localhost',
user: 'root',
password: 'password',
database: 'database_name'
});


connection.connect();

module.exports = connection;

const pool = new mssql.ConnectionPool(config);

module.exports = {
  query: async function (sql, params) {
    try {
      await pool.connect();
      const result = await pool.request();
      if (params) {
        Object.keys(params).forEach(key => {
          result.input(key, params[key]);
        });
      }
      return await result.query(sql);
    } finally {
      pool.close();
    }
  },
};
