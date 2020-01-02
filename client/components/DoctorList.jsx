import React from 'react';
import DoctorEntry from './DoctorEntry.jsx';

class DoctorList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let doctors = this.props.doctors;

    return(
      <ul>
        {doctors.map(doctor => <DoctorEntry key={doctor.id} doctorName={doctor} />)}
      </ul>
    )
  }
}
export default DoctorList;
