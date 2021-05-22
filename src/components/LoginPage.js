import React from 'react'
import Table from './Table'
import '../App.css'
import './loginPage.css'


const LoginPage = () => {
    return (



<div>
        
       <div className = 'LoginGrid'>
           <div className = 'leftPanel'>
           <form className = 'loginForm'>
                    <label LabelText = {'Username/Email Address'}> 
                    </label>
                    <input className = 'input' type = {'email'} placeholder = {'Username'}>
                    </input>
                    <label >
                    </label>
                    <input className = 'input' type = {'password'}placeholder = {'Password'}>
                    </input>
                    <button className = 'loginButton'> Login </button>
                    <button className = 'loginButton'> Create Account </button>
                </form>
                
           </div>
           <div className = 'centerPanel'>    
           <Table>
                    
                </Table>         
           </div>
           <div className = 'rightPanel'>

           </div>
       </div>
  </div>


      
    )
}

export default LoginPage