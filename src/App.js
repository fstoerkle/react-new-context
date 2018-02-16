import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import SupportedLanguages from './SupportedLanguages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="Netlight" />
        <SupportedLanguages />
      </div>
    );
  }

  getChildContext() {
    return {
      config: {
        languages: [
          'English',
          'Deutsch',
          'Svenska',
          'Norsk',
          'Bairisch'
        ]
      }
    };
  }
}

App.childContextTypes = {
  config: PropTypes.obj
};

export default App;
