import React from 'react'
import Table from './Table'
import '../App.css'
import './loginPage.css'
import { NavLink } from 'react-router-dom'



const LoginPage = () => {
    return (



<div>
        
       <div className = 'LoginGrid'>
           <div className = 'leftPanel'>
                <form className = 'loginForm'>
                    <label LabelText = {'Username/Email Address'}> 
                    </label>
                    <input className = 'inputLeft' type = {'email'} placeholder = {'Username'}>
                    </input>
                    <label >
                    </label>
                    <input className = 'inputLeft' type = {'password'}placeholder = {'Password'}>
                    </input>
                    
                        <button type = 'button' className = 'loginLeftButton'> Login </button>
                    
                    
                        <NavLink to = '/CreateAccount' type = 'button' className = 'loginLeftButton'> Create Account </NavLink>
                    
                </form>
                
           </div>
           <div className = 'centerPanel'>    
           <Table>
                    
                </Table>         
           </div>
           <div className = 'rightPanel'>
               <form className = 'loginForm'>
                    <NavLink type='button' className = 'loginRightButton' to = "/Login">
                         About 
                    </NavLink>
                    <NavLink type = 'button' className = 'loginRightButton' to = "/Login">
                          Rules
                    </NavLink>
                </form>
           </div>
       </div>
  </div>


      
    )
}

export default LoginPage