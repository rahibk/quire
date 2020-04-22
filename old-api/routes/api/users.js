var express = require('express');
var router = express.Router();
var mysql = require('mysql')

const host = 'localhost';
const user = 'root';
const pswd = 'root';
const dbname = 'charity';

// config db ====================================
const pool = mysql.createPool({
  host: host,
  user: user,
  password: pswd,
  port: '3306',
  database: dbname
});


 const COLUMNS = ['user_id','last_name', 'first_name', 'e_mail'];

router.get('/api/users', (req, res) => {
  var queryString = "SELECT * FROM users";

  pool.query(queryString, function(err, rows, fields) {
    if (err) throw err;

    if (rows.length > 0) {
      res.json(
        rows.map(entry => {
          const e = {};
          COLUMNS.forEach(c => {
            e[c] = entry[c];
          });
          return e;
        })
      );
    } else {
      res.json([]);
    }
  });
}); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
