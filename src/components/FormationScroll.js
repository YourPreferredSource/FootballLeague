import React from 'react'
import '../App.css'
import './homePage.css'
import Button from './Button'
import {useState} from 'react'

const FormationScroll = () => {

return (
    <div className = 'rightPanel'>
    <div className = 'formationContainer'>
        <div className = 'formationGrid'>
            <form className = 'formationButton'>
                <Button type = 'button' buttonText = '433' color = 'steelblue' minWidth = '80px' maxWidth = '80px' onClick = {() => (console.log('click'))}>

                    </Button>
                <Button type = 'button' buttonText = '4312' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button >
                <Button type = 'button' buttonText = '4321' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button>
                <Button type = 'button' buttonText = '4231' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button>
                <Button type = 'button' buttonText = '451' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button>
                <Button type = 'button' buttonText = '442' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button>
                <Button type = 'button' buttonText = '41212' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button>
                <Button type = 'button' buttonText = '352' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button>
                <Button type = 'button' buttonText = '343' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button>
                <Button type = 'button' buttonText = '3412' color = 'steelblue' minWidth = '80px' maxWidth = '80px'>
                    
                    </Button>
            </form>

        </div>

    </div>
    </div>
)
}

export default FormationScroll