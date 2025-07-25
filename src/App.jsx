import './App.css'
import PixelArt from './components/PixelArt'
import Project from './components/Project'

export default function App() {
    return (
        <>
            <div className="titleText">
                <h1>bdjang.github.io</h1>
            </div>
            <PixelArt />
            <div className="introText">
                <h2>I am a web tinkerer. I experiment with code. I sometimes create digital art.</h2>
            </div>
            <hr />
            <div className="projectDesc">
                <Project projectTitle="Current Working Project: 🌗 Dark Mode Pixel Art" projectDescription={ // Pass the link as a prop and compose the description in JSX
                    <>
                        Using the inbox as my canvas, I create code-based pixel art that displays one way in light mode and another in dark mode. The pixel art adjusts based on the email client's settings in dark mode.
                    </>
                } />
                <Project projectTitle="Past Project: 📊 Email Chart Builder" projectDescription={
                    <>
                        A tool for building bar charts for HTML email templates. <a href="https://charts.email/" target="_blank" rel="noopener noreferrer">Visit project site</a>
                    </>
                } />
                <Project projectTitle="Past Project: 📜 Email Pixel Alphabet" projectDescription={
                    <>
                        A tool for creating pixelated letters for emails or digital art. <a href="https://github.com/bdjang/" target="_blank" rel="noopener noreferrer">Visit project repo</a>
                    </>
                } />
            </div>
        </>
    )
}
