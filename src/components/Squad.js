import React, {useState} from 'react';
import PlayerCard from './PlayerCard';
import Navbar from './Navbar';
import roster from '../data';
import '../App.css';
import './squad.css';



const Squad = () => {

    const [index, setIndex] = useState(1);
    const { id, name, position, solo, special, img, credit, original } = roster[index];

    return (
        <div>
            <Navbar></Navbar>
            <div className="HomePageGrid">
                <div className="centerPanel"/>
                <div className="leftPanel"/>
                <div className="rightPanel"/>
            </div>
            <section className="centerSection">
                <PlayerCard roster={{ id, name, position, solo, special, img, credit, original }} />
            </section>
        </div>    
    );

};

export default Squad;