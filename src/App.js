import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import LoginPage from './components/LoginPage'
import RulesPage from './components/RulesPage'
import './App.css';
import StartPage from './components/StartPage'
import HomeUserPage from './components/HomeUserPage'
import FirstEleven from './components/FirstEleven'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ StartPage } />
        <Route path='/Login' component={ LoginPage } />
        <Route path='/Rules' component={ RulesPage } />
        <Route path='/HomeUserPage' component={ HomeUserPage } />
        <Route path='/FirstEleven' component={ FirstEleven } />
      </Switch>
   </BrowserRouter>
  )
 
}

export default App;
