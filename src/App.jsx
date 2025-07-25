import './App.css'
import PixelArt from './components/PixelArt'

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
