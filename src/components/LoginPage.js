import React, { useEffect, useState, useContext } from 'react';
// import Table from './Table'
// import '../App.css'
import './loginPage.css'
import { NavLink } from 'react-router-dom'



const LoginPage = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log('here yar ', event)
        console.log('here yar ', username)
        console.log('here yar ', password)
    }

    return (



<div>
        
       <div className = 'grid-container'>
           <div className = 'item-1'>
                
                
           </div>
          
           <div className = 'item-2'>    
           {/* <Table>
                    
                </Table>          */}
           </div>
           <div className = 'item-5'>
            <div className = 'Title'>Mint Football</div>
                
                
                </div>
           <div className = 'item-4'>
           <form className = 'loginForm' onSubmit={handleSubmit}>
                    {/* <label LabelText = {'Username/Email Address'}> 
                    </label> */}
                    <input 
                    className = 'inputLeft' 
                    type = 'email' 
                    placeholder = 'Username' 
                    value = {username} 
                    onChange={e => setUserName(e.target.value)}
                    />

                    {/* <label >
                    </label> */}
                    <input 
                    className = 'inputLeft' 
                    type = 'password'
                    placeholder = 'Password'
                    value = {password} 
                    onChange={e => setPassword(e.target.value)}
                    />
                        

                        <input type="submit" value = 'Login' className = 'loginLeftButton'/>
                        {/* <button type = 'button' className = 'loginLeftButton' > Login </button> */}
                    
                    
                        <NavLink to = '/CreateAccount' type = 'button' className = 'loginLeftButton'> Create Account </NavLink>
                    
                </form>
            </div>
           <div className = 'item-3'>
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