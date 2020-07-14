import React from 'react';
import './App.css';
import Questions from './components/Questions';
import Ourmission from './components/Ourmission';
import Homepage from './components/Homepage';
import Resources from './components/Resources';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App(){
  return(
    <Router>
    <div className={App}>
      <Switch>
      <Route  path="/" exact component= {Homepage}/>
      <Route  path="/ourmission" exact component= {Ourmission}/>
      <Route  path="/questions" exact component= {Questions}/>
      <Route  path="/resources" exact component= {Resources}/>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
