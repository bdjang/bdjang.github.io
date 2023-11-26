import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Victory() {
    return (
        <>
            ✌️
        </>
    )
}

function App() {

    return (
        <>
            <div className="logo">
                <Victory />
            </div>
            <h1>Hello world</h1>
        </>
    )
}

export default App
