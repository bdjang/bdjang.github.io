import './App.scss'
import { useState } from 'react';
import PixelArt from './components/PixelArt.js';
import Project from './components/Project.js';
import PixelName from './components/PixelName.js';
import Footer from './components/Footer.js';
import ArtFeed from './components/ArtFeed.js';
import VideoModal from './components/VideoModal.js';
import placeholderVideo from './videos/placeholder-video.mp4';

export default function App() {
    // Initialize ranColorOne and ranColorTwo React state variables, pass current values as props to PixelName and PixelArt components
    const ranColorOne = "#" + (Math.random() * 0xffffff << 0).toString(16).padStart(6, "0");
    const ranColorTwo = "#" + (Math.random() * 0xffffff << 0).toString(16).padStart(6, "0");
    const [pixelColorOne, setPixelColorOne] = useState(ranColorOne);
    const [pixelColorTwo, setPixelColorTwo] = useState(ranColorTwo);
    const [selectedProject, setSelectedProject] = useState<string | undefined>();

    return (
        <>
            <PixelName colorOne={pixelColorOne} colorTwo={pixelColorTwo} />
            <PixelArt colorOne={pixelColorOne} colorTwo={pixelColorTwo} />
            <section className="introText">
                <h2>I am a web tinkerer. I experiment with code. I sometimes create digital art.</h2>
            </section>
            <hr />
            <section>
                {selectedProject ? <VideoModal src={selectedProject} setSelectedProject={setSelectedProject} /> :
                    <Project
                        src={placeholderVideo}
                        selectProject={() => setSelectedProject(placeholderVideo)}
                        projectTitle="Charts.Email"
                        projectDescription={ // Pass the link as a prop and compose the description in JSX
                        <>
                            A tool for building bar charts for HTML email templates. <a href="https://charts.email/" target="_blank" rel="noopener noreferrer">Visit project site</a>
                        </>
                    } />
                }
                {selectedProject ? <VideoModal src={selectedProject} setSelectedProject={setSelectedProject} /> :
                    <Project
                        src={placeholderVideo}
                        selectProject={() => setSelectedProject(placeholderVideo)}
                        projectTitle="Djang Email Art"
                        projectDescription={
                        <>
                            A site for managing and showcasing my personal digital art collection.
                        </>
                    } />
                }
                {selectedProject ? <VideoModal src={selectedProject} setSelectedProject={setSelectedProject} /> :
                    <Project
                        src={placeholderVideo}
                        selectProject={() => setSelectedProject(placeholderVideo)}
                        projectTitle="Email Graffiti"
                        projectDescription={
                        <>
                            A digital art tool for creating freehand art that can be placed into email quickly and spontaneously.
                        </>
                    } />
                }
            </section>
            <ArtFeed />
            <Footer />
        </>
    )
}
