import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Landing from '../../Containers/Landing/Landing';
import Dashboard from '../../Containers/Dashboard/Dashboard';

function App() {
  return (
    <Switch className='App'>
      <Route exact path='/' component={Landing} />
      <Route exact path='/Dashboard' component={Dashboard} />
    </Switch>
  );
}

export default App;
