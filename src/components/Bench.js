import React from 'react'
import PlayerCard from './PlayerCard'
import '../App.css'
import './homePage.css'


const Bench = () => {

    return (

<div className = 'rightPanel'>
    <div className = 'benchGrid'>

        <div className = 'firstBenchPic'>
            <PlayerCard></PlayerCard>
        </div>

        <div className = 'secondBenchPic'>
            <PlayerCard></PlayerCard>
        </div>

        <div className = 'thirdBenchPic'>
            <PlayerCard></PlayerCard>
        </div>

        <div className = 'fourthBenchPic'>
            <PlayerCard></PlayerCard>
        </div>

        <div className = 'fifthBenchPic'>
            <PlayerCard></PlayerCard>
        </div>

    </div>
    </div>

    );
}

export default Bench