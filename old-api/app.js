const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(require('./routes'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.set('port', process.env.PORT || 9000);

// Express only serves static assets in production
  // Return the main index.html, so react-router render the route in the client
  /*   app.get('/', (req, res) => {
      res.sendFile(path.resolve('client/build', 'index.html'));
    });


  const COLUMNS = ['last_name', 'first_name'];
   */

  app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
  });
/* 
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
  
  const USER_COLUMNS = ['user_id', 'last_name', 'first_name', 'e_mail'];
  
  
  //GET all of the users
  app.get('/users', (req, res) => {
    var queryString = "SELECT * FROM users";

    pool.query(queryString, function (err, rows, fields) {
      if (err) throw err;

      if (rows.length > 0) {
        res.json(
          rows.map(entry => {
            const e = {};
            USER_COLUMNS.forEach(c => {
              e[c] = entry[c];
            });
            return e;
          })
        );
      } else {
        res.json([]);
      }
    });
  }); */

module.exports = app;