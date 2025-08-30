import styles from "./Project.module.scss"

interface projectProps { // Used to define types for objects, functions, and other structures in TypeScript
    projectTitle: string;
    projectDescription: string;
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