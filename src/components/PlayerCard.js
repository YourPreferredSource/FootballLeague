import React, {useState} from 'react';
import '../App.css';
import './squad.css';


const PlayerCard = ({roster}) => {

   const { id, name, position, solo, special, img, credit, original } = roster;

   return (
      <section className="squadPlayerCard">
               <article key={id}>
                  <img src={img} alt={name} className='squadPlayerPicture'/>
                  <p className="squadPlayerCredit">Photo by:{credit} - {original}</p>
                  <header className="squadPlayerName">{name}</header>
                  
                  <h3 className="squadPlayerPosition">Position: {position}</h3>
                  
                  
                  <h3 className="squadPlayerSolo">Solo: {solo} </h3>
                  
                  
                  <h3 className="squadPlayerSpecial">Special: {special}</h3>
               
               </article>
   </section>
    );
};

export default PlayerCard;



