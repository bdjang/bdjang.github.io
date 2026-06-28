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
                            Tool for building bar charts for HTML email templates. <a href="https://charts.email/" target="_blank" rel="noopener noreferrer">Visit project site</a>
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
                            Digital art tool for creating freehand art specifically for email. <a href="https://emailgraffiti.com/" target="_blank" rel="noopener noreferrer">Visit project site</a>
                        </>
                    } />
                }
                {selectedProject ? <VideoModal src={selectedProject} setSelectedProject={setSelectedProject} /> :
                    <Project
                        src={placeholderVideo}
                        selectProject={() => setSelectedProject(placeholderVideo)}
                        projectTitle="Email Graffiti Wall"
                        projectDescription={
                        <>
                            Real-time rendering of pixel art created through Email Graffiti.  <a href="https://email-graffiti-wall-642e35ea01e9.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit project site</a>
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
                            Site for managing and showcasing personal digital art collection.
                        </>
                    } />
                }
            </section>
            <ArtFeed />
            <Footer />
        </>
    )
}
