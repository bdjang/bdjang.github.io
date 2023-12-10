import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './components/List'
import PixelArt from './components/PixelArt'

function App() {

    return (
        <>
            <div className="pixelGS">
                <PixelArt />
            </div>
            <h1>bdjang.github.io</h1>
            <p>Add some pixel art into your emails</p>
            <ul>
                <li>Code-based Pixel Art</li>
                <li>No Images</li>
                <li>Dark Mode Compatible</li>
                <li>Make It Yours</li>
            </ul>
            <h2>Pros</h2>
            <ul>
                <li>Comes in various sizes</li>
                <li>Adapts to dark mode based on the email client</li>
                <li>Makes your email signature unique</li>
            </ul>
            <h2>Cons</h2>
            <ul>
                <li>Limit to X pixel art per email. Using more can lead to clipping issues</li>
                <li>Simpler is better. Complex and detailed pixel art is difficult to produce in email</li>
                <li>Email clients could change how they render email code. This could impact how pixel art is displayed</li>
            </ul>
        </>
    )
}

export default App
