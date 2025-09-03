import styles from './Project.module.scss'
import VideoModal from './VideoModal.js';

interface projectProps { // Used to define types for objects, functions, and other structures in TypeScript
    projectTitle: React.ReactNode; // Type for text, JSX, or components; maximum flexibility
    projectDescription: React.ReactNode;
    selectProject: any;
    src: string;
}

export default function Project({ projectTitle, projectDescription, selectProject, src }: projectProps) {
    return (
        <>
            <article onClick={() => { selectProject(<VideoModal src={src} />) }} className={styles.projectDesc}>
                <h2 className={typeof projectTitle === 'string' && projectTitle.includes('Email') ? styles.comingSoon : ''}>{projectTitle}</h2> {/* Using conditional rendering to include an h2 class */}
                <p>{projectDescription}</p>
            </article>
        </>
    )
}