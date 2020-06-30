import React, { Component } from 'react';

import { Home } from './pages/Home'
import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {


  render() {
    return (
      <div className="App">
        <Home />
      </div>
    )

  }
}

export default App;
