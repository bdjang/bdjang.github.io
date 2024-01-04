import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import PixelArt from './components/PixelArt'
import PixelName from './components/PixelName'

export default function App() {
    
    const magicalSwordEl = document.getElementsByClassName("magicalSword");
    const flameArtEl = document.getElementsByClassName("flameArt");
    const sunGlassesEl = document.getElementsByClassName("sunGlasses");
    function pixelClick() {
        flameArtEl[0].style.opacity = '1';
        magicalSwordEl[0].style.opacity = '1';
        magicalSwordEl[0].style.transform = 'rotate(360deg) scale(1)';
        sunGlassesEl[0].style.opacity = '1';
    }
    function pixelLeave() {
        flameArtEl[0].style.opacity = '0';
        magicalSwordEl[0].style.opacity = '0';
        magicalSwordEl[0].style.transform = 'rotate(0) scale(0)';
        sunGlassesEl[0].style.opacity = '0';
    }

    return (
        <>
            <div className="titleText">
                <h1 onMouseEnter={e => e.target.style.color = '#ff0000'} onMouseLeave={e => e.target.style.color = '#f2f2f2'}>bdjang.github.io</h1>
            </div>
            <div className="pixelPanel" onClick={pixelClick} onMouseLeave={pixelLeave} onTouchEnd={pixelLeave}>
                <PixelArt />
            </div>
            <div className="introText">
                <h2>I am a web tinkerer. I experiment with code. I sometimes create digital art.</h2>
            </div>
            <hr />
            <div className="projectDesc">
                <h2>Current Project: Pixel Art in Email</h2>
                <p><span>Inbox Pixel Artist</span>: Using the inbox as my canvas, I create code-based pixel art that renders one way in light mode and another in dark mode. The email client hosting the pixel art will determine how it changes in dark mode.</p>
                {/* <p>I look for ways to create art in unexpected places.</p> */}
            </div>
            {/* <p>Add some pixel art into your emails</p>
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
            </ul> */}
        </>
    )
}
