import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DoctorList from './DoctorList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    // bind functions here
    // this.functionName = this.functionName.bind(this);

    this.state = {
      doctors: [],
    };
  }

  // function definitions / lifecycle methods here
  // functionName() {}

  componentDidMount() {
    axios.get('/api/doctors')
    .then(doctors => {
      this.setState({
        doctors: doctors.data.rows
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <BaseStyle>
        <Notable>notable</Notable>
        <Physicians>PHYSICIANS</Physicians>
        <DoctorList doctors={this.state.doctors} />
      </BaseStyle>
    )
  }
}

export default App;

// Styling
const BaseStyle = styled.div`
  font-family: sans-serif;
`;

const Notable = styled.h1`
  color: #0073e6;
`;

const Physicians = styled.div`
  font-weight: bold;
`;
