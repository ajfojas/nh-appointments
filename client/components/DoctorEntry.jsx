import React from 'react';

class DoctorEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.doctorName)
    return (
      <li>{this.props.doctorName.lastName + ', ' + this.props.doctorName.firstName}</li>
    );
  }
}

export default DoctorEntry;
