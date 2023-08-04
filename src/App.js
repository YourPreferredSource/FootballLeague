import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Squad from './components/Squad';
import LoginPage from './components/LoginPage';
import RulesPage from './components/RulesPage';
import './App.css';
import HomePage from './components/HomePage';
import FirstEleven from './components/FirstEleven';
import CreateAccount from './components/CreateAccount';
import Team from './components/Team';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ LoginPage } />
        <Route path='/CreateAccount' component={ CreateAccount } />
        <Route path='/Rules' component={ RulesPage } />
        <Route path='/HomePage' component={ HomePage } />
        <Route path='/FirstEleven' component={ FirstEleven } />
        <Route path='/Squad' component={ Squad } />
        <Route path='/Team' component={ Team } />
      </Switch>
   </BrowserRouter>
  )
 
}

export default App;
