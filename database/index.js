const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'notableChallenge'
});

pool.connect();

const getData = function(callback) {
  pool.query('SELECT * FROM data', (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const postData = function(info, callback) {
  pool.query(`INSERT INTO data ("column1") VALUES ('${info}')`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const deleteData = function(callback) {
  pool.query('DELETE FROM data', (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getData,
  postData,
  deleteData,
};
