import styles from "./Project.module.scss"

interface projectProps { // Used to define types for objects, functions, and other structures in TypeScript
    projectTitle: React.ReactNode; // Type for text, JSX, or components; maximum flexibility
    projectDescription: React.ReactNode;
}

export default function Project(props: projectProps) {
    return (
        <>
            <div className={styles.projectDesc}>
                <h2>{props.projectTitle}</h2>
                <p>{props.projectDescription}</p>
            </div>
        </>
    )
}