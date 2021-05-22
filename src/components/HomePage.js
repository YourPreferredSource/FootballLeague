import React from 'react'
import '../App.css'
import './homePage.css'
import { NavLink } from "react-router-dom"
import PlayerCard from "./PlayerCard"
import Bench from "./Bench"
import FormationScroll from "./FormationScroll"
import Button from './Button'
import { useState } from 'react'
import HomeUserNavigate from './HomeUserNavigate'
import Navbar from './Navbar'
import HPPlayerProfile from './HPPlayerProfile'

const HomePage = () => {
   
const [showBench, setShowBench] = useState (true)
const [showFormation, setShowFormation] = useState(false)





    return (
       <div>
        <Navbar ></Navbar>
       <div className = 'HomePageGrid'>
           <div className = 'leftPanel'>
               <HPPlayerProfile/>
           </div>
           <div className = 'centerPanel'>             
           </div>
           <div className = 'rightPanel'>

           </div>
       </div>
                       
       
        </div>


    )
}

export default HomePage