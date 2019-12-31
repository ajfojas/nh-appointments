import React from 'react';
import DoctorEntry from './DoctorEntry.jsx';

class DoctorList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayDoctors = this.props.doctors;

    return(
      <ul>
        {displayDoctors.map(doctor => <DoctorEntry key={doctor.id} doctorName={doctor} />)}
      </ul>
    )
  }
}
export default DoctorList;
