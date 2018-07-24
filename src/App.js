import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BigComponent from './components/BigComponent'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' render={() => <BigComponent/>}/>
          <Route exact path='/bigcomp/:every' render={(atom) => <BigComponent {...atom}/>}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
