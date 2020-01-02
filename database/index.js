const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'notableChallenge'
});

pool.connect();

const getAllDoctors = function(callback) {
  pool.query('SELECT * FROM doctors', (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const getDoctorsAppointment = function(doctorFN, doctorLN, day, callback) {
  pool.query(`SELECT * FROM appointments WHERE doctor_id = (SELECT id FROM doctors WHERE firstName = ${doctorFN} AND lastName = ${doctorLN}) AND day = ${day}`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const deleteAppointment = function(doctorFN, doctorLN, date, time, callback) {
  pool.query(`DELETE FROM appointments WHERE doctor_id = (SELECT id FROM doctors WHERE firstName = ${doctorFN} AND lastName = ${doctorLN}) AND date = ${date} AND time = ${time} ADD CONSTRAINT 'appointments_user_id_foreign' FOREIGN KEY (doctor_id) REFERENCES doctors (id) ON DELETE CASCADE`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const postAppointment = function(doctorFN, doctorLN, patientFirstName, patientLastName, date, time, kind, callback) {
  let docID = pool.query(`SELECT id FROM doctors WHERE firstName = ${doctorFN} AND lastName = ${doctorLN}`);
  pool.query(`INSERT INTO appointments ("patientFirstName", "patientLastName", "date", "time", "kind", "doctor_id") VALUES ('${patientFirstName}', '${patientLastName}', '${date}', '${time}', '${kind}', ${docID})`, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getAllDoctors,
  getDoctorsAppointment,
  deleteAppointment,
  postAppointment
};
