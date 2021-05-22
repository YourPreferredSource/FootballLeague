import React from 'react'
import '../App.css'
import './homePage.css'
import PlayerCard from './PlayerCard'

const HPPlayerProfile = ({nameText}) => {

    return (
        <div>
            <div className = 'playerName'>{nameText}</div>
            <div className = 'playerPic'> </div>
            <div className = 'playerInfo'></div>
            <div className = 'playerInfo'></div>
            <div className = 'playerInfo'></div>

        </div>
    )
}

export default HPPlayerProfile