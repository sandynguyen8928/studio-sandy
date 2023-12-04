import React from "react";
import styles from "./project.module.scss";
import github_logo from "../../assets/github.png";
import figma_logo from "../../assets/figma.png";

interface Props {
    image: string
    title: string;
    roles: string;
    github?: string;
    figma?: string;
}

const project:React.FC<Props> = ({image, title, roles, github, figma}) => {
    return (
        <div className={styles["project-styled"]}>
            <img src={image} className={styles["project-image"]} alt="project"/>
            <div className={styles["title"]}>{title}</div>
            <div className={styles["roles"]}>{roles}</div>
            <div className={styles["sources"]}>
                {github ? <a href={github} target="_blank" rel="noopener noreferrer"><img src={github_logo} className={styles["source-logo"]} alt="github logo"/></a> : <div className={styles["empty"]}/>}
                {figma ? <a href={figma} target="_blank" rel="noopener noreferrer"><img src={figma_logo} className={styles["source-logo"]} alt="figma logo"/></a> : <div className={styles["empty"]}/>}
            </div>
        </div>
    )
}

export default project;