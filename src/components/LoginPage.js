import React from 'react'
import Table from './Table'
import '../App.css'
import './startPage.css'


const LoginPage = () => {
    return (
        <div className = 'LoginGrid'>
            <div className = 'leftGridBox'>
                <form>
                    <label LabelText = {'Username/Email Address'}> 
                    </label>
                    <input placeholder = {'...'}>
                    </input>
                </form>
    
            </div>
            <div className = 'lowerLeftGridBox'>
                <form>
                    <label >
                    {'Password '}
                    </label>
                    <input placeholder = {'...'}>
                    </input>
                </form>
            </div>
            <div className = 'middleGridBox'>
                <Table>
                    
                </Table>

            </div>
        </div>
    )
}

export default LoginPage