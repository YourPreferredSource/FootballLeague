import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import '../App.css'
import './homePage.css'

const HomeUserNavigate = ({onPressBench, onPressFormation}) => {

    return (
        <form className = 'leftPanel'>
             
             <Button 
             onClick ={onPressBench}
             className='Button' 
             minWidth = '160px' 
             maxWidth = '1600px' 
             buttonText = 'Bench' 
             color = 'steelblue'
             type = 'button'>
             </Button>
             <Button 
             onClick ={onPressFormation}
             className='Button' 
             minWidth = '160px' 
             maxWidth = '1600px' 
             buttonText = 'Formation' 
             color = 'steelblue'
             type = 'button'>
             </Button>
             <NavLink to="/Login" className='Button' style = {{minWidth: '160px', maxWidth: '160px'}}>  Tactics </NavLink>
             <NavLink to="/Login" className='Button' style = {{minWidth: '160px', maxWidth: '160px'}}>  Transfers </NavLink>
             <NavLink to="/Login" className='Button' style = {{minWidth: '160px', maxWidth: '160px'}}>  Competitions </NavLink>
             <NavLink to="/Login" className='Button' style = {{minWidth: '160px', maxWidth: '160px'}}>  Stats </NavLink>
         
             <NavLink to="/Rules" className='Button' style = {{minWidth: '160px', maxWidth: '160px'}}> Rules </NavLink>
         
             <NavLink to="/Login" className='Button' style = {{minWidth: '160px', maxWidth: '160px'}}> Logout </NavLink>
         
     </form>
    )
}

export default HomeUserNavigate