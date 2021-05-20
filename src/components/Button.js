import React from 'react'
import '../App.css';

const Button = ({buttonText, color, minWidth, maxWidth, type, onClick}) => {

    // const onClick = () => {
    //     console.log('Click')
    // }

    return (
        
    <button onClick = {onClick} type = {type} style= {{ backgroundColor: color, minWidth: minWidth, maxWidth: maxWidth}} className = 'Button' >{buttonText}</button>
    )
}

export default Button