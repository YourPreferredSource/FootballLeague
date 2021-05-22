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
                    <input className = 'inputLeft' type = {'email'} placeholder = {'Username'}>
                    </input>
                    <label >
                    </label>
                    <input className = 'inputLeft' type = {'password'}placeholder = {'Password'}>
                    </input>
                    <button className = 'loginLeftButton'> Login </button>
                    <button className = 'loginLeftButton'> Create Account </button>
                </form>
                
           </div>
           <div className = 'centerPanel'>    
           <Table>
                    
                </Table>         
           </div>
           <div className = 'rightPanel'>
               <form className = 'loginForm'>
                    <button className = 'loginRightButton'> About </button>
                    <button className = 'loginRightButton'> Rules </button>
                </form>
           </div>
       </div>
  </div>


      
    )
}

export default LoginPage