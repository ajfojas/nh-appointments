const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/doctors', (req, res) => {
  db.getAllDoctors((error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/api/doctor/:doctorFN/:doctorLN/day/:day', (req, res) => {
  let { doctorFN, doctorLN, day } = req.params;
  db.getDoctorsAppointment(doctorFN, doctorLN, day, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  })
});

app.delete('/api/doctor/:doctorFN/:doctorLN/appointment/:date/:time', (req, res) => {
  let { doctorFN, doctorLN, date, time } = req.params;
  db.deleteAppointment(doctorFN, doctorLN, date, time, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/doctor/:doctorFN/:doctorLN/appointment/:patientFirstName/:patientLastName/:date/:time/:kind', (req, res) => {
  let { doctorFN, doctorLN, patientFirstName, patientLastName, date, time, kind } = req.params;
  db.postAppointment(doctorFN, doctorLN, patientFirstName, patientLastName, date, time, kind, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));