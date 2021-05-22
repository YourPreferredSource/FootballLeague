import React from 'react'
import '../App.css'
import './Button'

const Table = () => {

    const Data = 
       [
            {Position: 1, Name: "Bully bruisers", Points: 10, LastRank: 2},
            {Position: 2, Name: 'Alphas', Points: 9, LastRank: 1},
            {Position: 3, Name: 'The monstars', Points: 8, LastRank: 3},
            {Position: 4, Name: 'The Omegas', Points: 7, LastRank: 4},
            {Position: 5, Name: 'Fish N Chips', Points: 6, LastRank: 7},
            {Position: 6, Name: 'In the Mixer', Points: 5, LastRank: 5},
            {Position: 7, Name: 'Larrys LOB-sters', Points: 4, LastRank: 6},
            {Position: 8, Name: 'The Classics', Points: 3, LastRank: 9},
            {Position: 9, Name: 'Park the bus', Points: 2, LastRank: 8},
            {Position: 10, Name: 'Robbery', Points: 1, LastRank: 10},
            
       ];
        
    



    return (
        <table className = 'Table'>
            <tr className = 'TableRow' >
                        <th>Position</th>
                        <th>Team Name</th>
                        <th>Points</th>
                        <th>GW Rank</th>
                        
                    </tr>
                    
            {Data.map(team => (
                <tr className = 'TableRow' >
                    <td  key={team.Position}>{team.Position}
                    </td>
                    <td  key={team.Position}>{team.Name}
                    </td>
                    <td key={team.Position}>{team.Points}
                    </td>
                    <td key={team.Position}>{team.LastRank}
                    </td>
                </tr>
            ))}
            
             </table>
        
    );
};

// Position, Name, points, last pos

export default Table