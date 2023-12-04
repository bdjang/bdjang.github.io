import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function GoldShades() {
    return (
        <>
            <div><table align="left" border="0" cellpadding="4" cellspacing="0" aria-description="Gold pixel shades"><tbody><tr><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td></td><td></td><td></td></tr><tr><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td></td><td></td></tr><tr><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td></tr><tr><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td></tr><tr><td></td><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td></tr><tr><td></td><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td></tr><tr><td></td><td></td><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#0A0A0A" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td></td><td></td><td></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td bgcolor="#FFD700" style={{ padding: 4 }}></td><td></td><td></td></tr></tbody></table></div>
        </>
    )
}

function App() {

    return (
        <>
            <div className="pixelGS">
                <GoldShades />
            </div>
            <h1>Email Pixel Art</h1>
            <p>Add some pixel art into your emails</p>
            <ul>
                <li>Code-based Pixel Art</li>
                <li>No Images</li>
                <li>Dark Mode Compatible</li>
                <li>Make It Yours</li>
            </ul>
            <h2>Pros</h2>
            <ul>
                <li>Size Matters Not: Make pixel art as big or as small as you want</li>
                <li>Adapts to dark mode based on the email client</li>
                <li>Makes your email signature unique</li>
                <li>Tied to the ETH blockchain</li>
            </ul>
            <h2>Cons</h2>
            <ul>
                <li>Limit to 8 pixel art per email. Using more can lead to clipping issues</li>
                <li>Simpler is better. Complex and detailed pixel art is difficult to produce in email</li>
                <li>Email clients could change how they render email code. This could impact how pixel art is displayed</li>
            </ul>
        </>
    )
}

export default App
