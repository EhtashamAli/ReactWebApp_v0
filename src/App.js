import React, { Component } from 'react';
import classes from './App.css';
import Background from './Components/UI/Background/Background';
import Aux from './hoc/Wrapper/Wrapper';
import Layout from './Containers/Layout/Layout';

class App extends Component {
  render() {
    console.log(classes);
    return (
          <Aux>
            <Background/>
            <Layout/>
          </Aux>     
    );
  }
}

export default App;
