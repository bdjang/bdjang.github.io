import './App.scss'
import { useState } from 'react';
import PixelArt from './components/PixelArt.js'
import Project from './components/Project.js'
import PixelName from './components/PixelName.js'
import Footer from './components/Footer.js'
import ArtFeed from './components/ArtFeed.js'

export default function App() {
    // Initialize ranColorOne and ranColorTwo React state variables, pass current values as props to PixelName and PixelArt components
    const ranColorOne = "#" + (Math.random() * 0xffffff << 0).toString(16).padStart(6, "0");
    const ranColorTwo = "#" + (Math.random() * 0xffffff << 0).toString(16).padStart(6, "0");
    const [pixelColorOne, setPixelColorOne] = useState(ranColorOne);
    const [pixelColorTwo, setPixelColorTwo] = useState(ranColorTwo);

    return (
        <>
            <PixelName colorOne={pixelColorOne} colorTwo={pixelColorTwo} />
            <PixelArt colorOne={pixelColorOne} colorTwo={pixelColorTwo} />
            <div className="introText">
                <h2>I am a web tinkerer. I experiment with code. I sometimes create digital art.</h2>
            </div>
            <hr />
            <Project projectTitle="Dark Mode Pixel Art" projectDescription={ // Pass the link as a prop and compose the description in JSX
                <>
                    Using the inbox as my canvas, I create code-based pixel art that displays one way in light mode and another in dark mode. The pixel art adjusts based on the email client's settings in dark mode.
                </>
            } />
            <Project projectTitle="Email Chart Builder" projectDescription={
                <>
                    A tool for building bar charts for HTML email templates. <a href="https://charts.email/" target="_blank" rel="noopener noreferrer">Visit project site</a>
                </>
            } />
            <Project projectTitle="Email Pixel Alphabet" projectDescription={
                <>
                    A tool for creating pixelated letters for emails or digital art. <a href="https://github.com/bdjang/" target="_blank" rel="noopener noreferrer">Visit project repo</a>
                </>
            } />
            <ArtFeed />
            <Footer />
        </>
    )
}
