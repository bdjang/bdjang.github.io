import styles from './Project.module.scss'

interface projectProps { // Used to define types for objects, functions, and other structures in TypeScript
    projectTitle: React.ReactNode; // Type for text, JSX, or components; maximum flexibility
    projectDescription: React.ReactNode;
}

export default function Project(props: projectProps) {
    return (
        <>
            <article className={styles.projectDesc}>
                <h2 className={typeof props.projectTitle === 'string' && props.projectTitle.includes('Email') ? styles.comingSoon : ''}>{props.projectTitle}</h2> {/* Using conditional rendering to include an h2 class */}
                <p>{props.projectDescription}</p>
            </article>
        </>
    )
}