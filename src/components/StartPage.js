import React from 'react'
import './startPage.css'
import '../App.css'
import Button from './Button'



const StartPage = () => {
    return (
        
        
            <div className = 'StartPageGrid'>
            
            <div className = 'leftGridBox'>
                <Button ButtonText = {"Log In"} />
            </div>

            <div className = 'lowerLeftGridBox'>
                <Button  ButtonText = {"Create Account"} />
            </div>
            
            <div className = 'middleGridBox'>
                <Button  ButtonText = {"Hello World"} />
            </div>
            
            
        </div>
        
    )
}

export default StartPage