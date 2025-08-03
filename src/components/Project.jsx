import { projectDesc as projectDescClass } from "./Project.module.scss"

export default function Project(props) {
    return (
        <>
            <div className={projectDescClass}>
                <h2>{props.projectTitle}</h2>
                <p>{props.projectDescription}</p>
            </div>
        </>
    )
}