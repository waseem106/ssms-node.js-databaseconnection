const sql = require("msnodesqlv8");

const connectionString = "server=.;Database=myDatabase;Trusted_Connection=Yes;";

console.log("Database Connected");

const query = "SELECT * from Products";

sql.query(connectionString, query, (err, rows) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log(rows);
});
