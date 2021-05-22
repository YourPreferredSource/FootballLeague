import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import LoginPage from './components/LoginPage'
import RulesPage from './components/RulesPage'
import './App.css';
import HomeUserPage from './components/HomeUserPage'
import FirstEleven from './components/FirstEleven'
import CreateAccount from './components/CreateAccount'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ LoginPage } />
        <Route path='/CreateAccount' component={ CreateAccount } />
        <Route path='/Rules' component={ RulesPage } />
        <Route path='/HomeUserPage' component={ HomeUserPage } />
        <Route path='/FirstEleven' component={ FirstEleven } />
      </Switch>
   </BrowserRouter>
  )
 
}

export default App;
