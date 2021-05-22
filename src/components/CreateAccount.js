import React from 'react'
import '../App.css'
import './loginPage.css'
import './createAccount.css'

const CreateAccount = () => {


    return (
        <div>
        
       <div className = 'LoginGrid'>
       <div className = 'leftPanel' />
           <div className = 'centerPanel'>
                <form className = 'createAccForm'>

                    <input className = 'createAccInput' type = {'text'} placeholder = {'First Name'}>
                    </input>
                    <input className = 'createAccInput' type = {'text'} placeholder = {'Last Name'}>
                    </input>
                    <input className = 'createAccInput' type = {'email'} placeholder = {'Email Address'}>
                    </input>
                    <input className = 'createAccInput' type = {'email'} placeholder = {'Username'}>
                    </input>
                    <input className = 'createAccInput' type = {'password'}placeholder = {'Password'}>
                    </input>
                    
                    <button className = 'createAccButton'> Create Account </button>
                    <button className = 'createAccButton'> Back </button>
                </form>
                
           </div>
           <div className = 'rightPanel' />
       </div>
  </div>
    )
}

export default CreateAccount