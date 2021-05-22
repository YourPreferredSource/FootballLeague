import React from 'react'
import '../App.css'
import './loginPage.css'

const CreateAccount = () => {


    return (
        <div>
        
       <div className = 'LoginGrid'>
       <div className = 'leftPanel' />
           <div className = 'centerPanel'>
                <form className = 'loginForm'>

                    <input className = 'input' type = {'text'} placeholder = {'First Name'}>
                    </input>
                    <input className = 'input' type = {'text'} placeholder = {'Last Name'}>
                    </input>
                    <input className = 'input' type = {'email'} placeholder = {'Email Address'}>
                    </input>
                    <input className = 'input' type = {'email'} placeholder = {'Username'}>
                    </input>
                    <input className = 'input' type = {'password'}placeholder = {'Password'}>
                    </input>
                    
                    <button className = 'loginButton'> Create Account </button>
                    <button className = 'loginButton'> Back </button>
                </form>
                
           </div>
           <div className = 'rightPanel' />
       </div>
  </div>
    )
}

export default CreateAccount