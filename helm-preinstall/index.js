const mysql = require("mysql");

var con = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "password",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
