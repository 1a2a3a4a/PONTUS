import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import StartPage from './StartPage/StartPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <StartPage/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
