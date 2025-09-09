import styles from './Project.module.scss'

interface projectProps { // Used to define types for objects, functions, and other structures in TypeScript
    projectTitle: React.ReactNode; // Type for text, JSX, or components; maximum flexibility
    projectDescription: React.ReactNode;
    selectProject: any;
    src: string;
}

export default function Project({ projectTitle, projectDescription, selectProject, src }: projectProps) {
    return (
        <>
            <article className={styles.projectDesc}>
                {typeof projectTitle === 'string' && (projectTitle.includes('Djang') || projectTitle.includes('Graffiti')) ? <span className={styles.comingSoon}>Coming soon</span> : ''}
                <h2 onClick={() => selectProject(src) }>{projectTitle}</h2> {/* Using conditional rendering to include an h2 class. Pass only the video source (src) to selectProject, not the React element. Let the parent component handle rendering <VideoModal /> based on the selected video. */}
                {/* 9.3.25: You have to keep adding the individual component properties (props) whenever they are used in other components */}
                <p>{projectDescription}</p>
            </article>
        </>
    )
}