import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import PixelArt from './components/PixelArt'

export default function App() {
    
    const asianManEl = document.getElementsByClassName("asianMan");
    const flameArtEl = document.getElementsByClassName("flameArt");
    const magicalSwordEl = document.getElementsByClassName("magicalSword");
    const pixelPanelEl = document.getElementsByClassName("pixelPanel");
    const sunGlassesEl = document.getElementsByClassName("sunGlasses");
    function pixelClick() {
        magicalSwordEl[0].style.opacity = '1';
        magicalSwordEl[0].style.transform = 'translate(0) rotate(360deg)';
        setTimeout(() => { magicalSwordEl[0].children[0].style.filter = 'invert(100%)'; }, 1500);
        sunGlassesEl[0].style.opacity = '1';
        sunGlassesEl[0].style.transform = 'translate(0)';
    }
    function pixelLeave() {
        magicalSwordEl[0].style.opacity = '0';
        magicalSwordEl[0].style.transform = 'translate(-400px, -500px) rotate(0)';
        magicalSwordEl[0].children[0].style.filter = 'invert(0%)';
        sunGlassesEl[0].style.opacity = '0';
        sunGlassesEl[0].style.transform = 'translate(0, -350px)';
        pixelPanelEl[0].style.filter = '';
    }
    function pixelShadow() {
        const ranBoxShadow1 = "#" + (Math.random() * 0xffffff << 0).toString(16).padStart(6, "0");
        pixelPanelEl[0].style.filter = 'drop-shadow(0 0 2em ' + ranBoxShadow1 + ')';
    }

    return (
        <>
            <div className="titleText">
                <h1 onMouseEnter={e => e.target.style.color = '#f2f2f2'} onMouseLeave={e => e.target.style.color = '#f2f2f2'}>bdjang.github.io</h1>
            </div>
            <div className="pixelPanel" onClick={pixelClick} onMouseOver={pixelShadow} onMouseLeave={pixelLeave} onTouchEnd={pixelLeave}>
                <PixelArt />
            </div>
            <div className="introText">
                <h2>I am a web tinkerer. I experiment with code. I sometimes create digital art.</h2>
            </div>
            <hr />
            <div className="projectDesc">
                <h2>Current Working Project: 🌗 Dark Mode Pixel Art</h2>
                <p>Using the inbox as my canvas, I create code-based pixel art that displays one way in light mode and another in dark mode. The pixel art adjusts based on the email client's settings in dark mode.</p>
                <h2>Past Project: 📊 Email Chart Builder</h2>
                <p>A tool for building bar charts for HTML email templates. <a href="https://charts.email/">Visit project site</a></p>
                <h2>Past Project: 📜 Email Pixel Alphabet</h2>
                <p>A tool for creating pixelated letters for emails or digital art. <a href="https://github.com/bdjang/">Visit project repo</a></p>
            </div>
        </>
    )
}
