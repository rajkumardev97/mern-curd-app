import React, { Component } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

class App extends Component {
  render() {
    return (
          <Router>
            <div>

              <Route exact path="/" component={Home} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/create' component={Create} />
             <Route path='/show/:id' component={Show} />
            </div>
          </Router>
        

    );
  }
}

export default App;
