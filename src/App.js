import React, { Component } from 'react';

import './App.css';
import HeaderComponent from './component/HeaderComponent';

class App extends Component {
  render() {
    return (

  <div className="App">
        <div className="App-header">
          Online shopping Application <br/>
            <div className="App-logo">
                    <img src="./yash_logo.PNG" alt="logo"></img>
            </div>
            <div className="App-navigation">
                    <HeaderComponent />
            </div>
        
        </div>
        
        <div className="App-footer">
        <hr/>
        <footer>
          (c) Copyright Yash Technologies
        </footer>
        </div>
      </div>

    );
  }
}

export default App;
