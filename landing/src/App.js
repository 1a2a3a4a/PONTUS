import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import WelcomePage from './WelcomePage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Candidate from './EmployerDirectory/Candidate'
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <WelcomePage/>
        </MuiThemeProvider>
          <Candidate/>
      </div>
    );
  }
}

export default App;
