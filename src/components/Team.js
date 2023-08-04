import React, {useState} from 'react';
import PlayerCard from './PlayerCard';
import Navbar from './Navbar';
import roster from '../data';
import '../App.css';
import './squad.css';
import {FilterableSelect} from './Inputs/Inputs';
import { E } from 'styled-icons/simple-icons';



const Team = () => {

    // const [index, setIndex] = useState(1);
    // const { id, name, position, solo, special, img, credit, original } = roster[index];

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className = 'pitch-grid-container'>
            <div className = 'pitch-background-1'>

                
                </div>
                <div className = 'pitch-background-2'>
                
                
                </div>


                <div className = 'pitch-lines3'>
                
                
                </div>
                <div className = 'pitch-lines4'>
                
                
                </div>
                <div className = 'pitch-lines5'>
                
                
                </div>
                <div className = 'pitch-lines'>
                
                
                </div>
                <div className = 'pitch-lines1'>
                
                
                </div>
                <div className = 'pitch-lines2'>
                
                
                </div>
                <div className = 'pitch-lines6'>
                
                
                </div>
                <div className = 'pitch-lines7'>
                
                
                </div>
                <div className = 'pitch-lines8'>
                
                
                </div>
                <div className = 'pitch-background-3'>


                
                </div>
                <div className = 'formationDropDownArea'>
                    <FilterableSelect
                          label={<>Formation </>}
                          data={"hello"}
                          setData={(e) => {console.log(e)}}
                          options={[{id: 1, data: "First"}, {id: 2, data: "First"}, {id: 3, data: "First"}, {id: 4, data: "First"}]}
                        //   error={}
                          style={{width: '100px'}}
                          disabled={false} />
                    </div>

           </div>    
        </div>    

    );

};

export default Team;