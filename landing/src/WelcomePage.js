import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//material-ui stuff
import RaisedButton from 'material-ui/RaisedButton';

class WelcomePage extends Component {
  render() {
    return (
      <div className="WelcomePage">
        <div>
          <RaisedButton label="Default" />
        </div>
      </div>
    );
  }
}

export default WelcomePage;
