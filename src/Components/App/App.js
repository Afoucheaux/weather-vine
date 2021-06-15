import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Landing from '../../Containers/Landing/Landing';

function App() {
  return (
    <Switch className='App'>
      <Route exact path='/' component={Landing} />
    </Switch>
  );
}

export default App;
