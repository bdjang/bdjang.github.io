import { projectDesc as projectDescClass } from "./Project.module.css"

export default function Project(props) {
    return (
        <>
            <h2>{props.projectTitle}</h2>
            <p>{props.projectDescription}</p>
        </>
    )
}