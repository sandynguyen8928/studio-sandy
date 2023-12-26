import React from "react";
import styles from "./contact.module.scss";
import github_logo from "../../assets/github.png";
import linkedin_logo from "../../assets/linkedin.png"
import {motion} from "framer-motion";

const contact = () => {
    return (
        <div className={styles["contact-styled"]}>
            <motion.div className={styles["name"]} whileHover={{ scale: 2.0 }} transition={{ type: "spring", damping: 10 }}>studio <br/>sandy</motion.div>
            <div className={styles["email"]}>sandycatnguyen@gmail.com</div>
            <div className={styles["socials"]}>
                <a href="https://github.com/sandynguyen8928" target="_blank" rel="noopener noreferrer"><img src={github_logo} className={styles["social-logo"]} alt="github logo"/></a>
                <a href="https://www.linkedin.com/in/sandynguyen8928/" target="_blank" rel="noopener noreferrer"><img src={linkedin_logo} className={styles["social-logo"]} alt="github logo"/></a>
            </div>
            <a className={styles["resume"]}
               href="https://drive.google.com/file/d/18EMTEADOL0doiiMZgccvqgc6UMYQYvOg/view?usp=drive_link"
               target="_blank" rel="noopener noreferrer">
                resume
            </a>
        </div>
    )
}

export default contact;