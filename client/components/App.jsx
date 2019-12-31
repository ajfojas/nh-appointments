import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    // bind functions here
    // this.functionName = this.functionName.bind(this);

    this.state = {
      // initialize states here
    };
  }

  // function definitions / lifecycle methods here
  // functionName() {}
  // componentDidMount() {}

  render() {
    return (
      <BaseStyle>Hello world</BaseStyle>
    )
  }
}

export default App;

// Styling
const BaseStyle = styled.div`
`;
