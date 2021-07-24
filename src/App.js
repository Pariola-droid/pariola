import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

import {PariolaWorks,Pariola} from './pages'

import './css/style.css';
import './css/myworks.css';

function App() {
  return (
    <>
      
      <Router>
        <Switch>
          <Route path="/" exact component={Pariola} />
          <Route path="/works" component={PariolaWorks} />
        </Switch>
      </Router>

    </>
  );
}

export default App;


// => PARIOLA CODES THE WEB✌😎
