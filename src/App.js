import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import ConfigContextContainer from './ConfigContext';
import SupportedLanguages from './SupportedLanguages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="Netlight" />
        <ConfigContextContainer config={this.getConfig()}>
          <SupportedLanguages />
        </ConfigContextContainer>
      </div>
    );
  }

  getConfig() {
    return {
      languages: [
        'English',
        'Deutsch',
        'Svenska',
        'Norsk',
        'Bairisch'
      ]
    };
  }
}

export default App;
