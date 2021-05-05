const mysql = require("mysql");

var con = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(`${process.env.name}`)
    var sql = `INSERT INTO shop (name, active) VALUES ("${process.env.name}", true)`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      
    });
  });