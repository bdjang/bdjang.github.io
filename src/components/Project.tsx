import styles from "./Project.module.scss"

export default function Project(props) {
    return (
        <>
            <div className={styles.projectDesc}>
                <h2>{props.projectTitle}</h2>
                <p>{props.projectDescription}</p>
            </div>
        </>
    )
}