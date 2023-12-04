import React from "react";
import styles from "./contact.module.scss";
import github_logo from "../../assets/github.png";
import linkedin_logo from "../../assets/linkedin.png"

const contact = () => {
    return (
        <div className={styles["contact-styled"]}>
            <div className={styles["name"]}>studio sandy</div>
            <div className={styles["roles"]}>
                <div className={styles["role"]}>frontend engineer</div>
                <div className={styles["role"]}>designer enthusiast</div>
                <div className={styles["role"]}>empath</div>
            </div>
            <div className={styles["email"]}>sandycatnguyen@gmail.com</div>
            <div className={styles["socials"]}>
                <a href="https://github.com/sandynguyen8928" target="_blank" rel="noopener noreferrer"><img src={github_logo} className={styles["social-logo"]} alt="github logo"/></a>
                <a href="https://www.linkedin.com/in/sandynguyen8928/" target="_blank" rel="noopener noreferrer"><img src={linkedin_logo} className={styles["social-logo"]} alt="github logo"/></a>
            </div>
        </div>
    )
}

export default contact;