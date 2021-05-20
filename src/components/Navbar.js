import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import Button from './Button'

const Navbar = () => {


    return (
        
        
            <ul className = 'Navbar'>
             <NavLink to="/Login" className='Button' >  Team </NavLink>
             <NavLink to="/Login" className='Button' >  Tactics </NavLink>
             <NavLink to="/Login" className='Button' >  Transfers </NavLink>
             <NavLink to="/Login" className='Button' >  Competitions </NavLink>
             <NavLink to="/Login" className='Button' >  Stats </NavLink>
             <NavLink to="/Rules" className='Button' > Rules </NavLink>
             <NavLink to="/Login" className='Button' > Logout </NavLink>
             </ul>
             
       
    )
}

export default Navbar