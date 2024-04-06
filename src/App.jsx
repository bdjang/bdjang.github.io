import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import PixelArt from './components/PixelArt'

export default function App() {
    
    const magicalSwordEl = document.getElementsByClassName("magicalSword");
    const flameArtEl = document.getElementsByClassName("flameArt");
    const sunGlassesEl = document.getElementsByClassName("sunGlasses");
    function pixelClick() {
        magicalSwordEl[0].style.opacity = '1';
        magicalSwordEl[0].style.transform = 'translate(0) rotate(360deg)';
        sunGlassesEl[0].style.opacity = '1';
        sunGlassesEl[0].style.transform = 'translate(0)';
    }
    function pixelLeave() {
        magicalSwordEl[0].style.opacity = '0';
        magicalSwordEl[0].style.transform = 'translate(-400px, -500px) rotate(0)';
        sunGlassesEl[0].style.opacity = '0';
        sunGlassesEl[0].style.transform = 'translate(0, -350px)';
    }
    // function randomNum() {
    //     const num = Math.floor(Math.random() * 5);
    //     console.log(num);
    //     const tt = document.getElementById("test");
    //     tt.innerHTML = num;
    // };

    return (
        <>
            <div className="titleText">
                <h1 onMouseEnter={e => e.target.style.color = '#f2f2f2'} onMouseLeave={e => e.target.style.color = '#f2f2f2'}>bdjang.github.io</h1>
            </div>
            <div className="pixelPanel" onClick={pixelClick} onMouseLeave={pixelLeave} onTouchEnd={pixelLeave}>
                <PixelArt />
            </div>
            <div className="introText">
                <h2>I am a web tinkerer. I experiment with code. I sometimes create digital art.</h2>
            </div>
            <hr />
            <div className="projectDesc">
                {/* <h2>Current Project: Pixel Art in Email</h2> */}
                <h2>Current Working Project: 🌗 Dark Mode Pixel Art</h2>
                <p>Using the inbox as my canvas, I create code-based pixel art that displays one way in light mode and another in dark mode. The pixel art adjusts based on the email client's settings in dark mode.</p>
                <hr />
                <h2>Completed Project: 📊 Email Chart Builder</h2>
                <p>A tool for building bar charts for HTML email templates. <a href="https://charts.email/">Visit project site</a></p>
                {/* <p>IDEA: Generate random number, display different pixel art collages based on random number</p> */}
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
