import React from "react";
import styles from "./landing.module.scss";

const landing = () => {
    return(
        <div className={styles["landing-styled"]}>
            <div className={styles["left-landing"]}>
                <div className={styles["name"]}>sandy</div>
                <div className={styles["name"]}>nguyen</div>
                <div className={styles["roles"]}>
                    <div className={styles["role"]}>frontend engineer</div>
                    <div className={styles["role"]}>designer enthusiast</div>
                    <div className={styles["role"]}>empath</div>
                </div>
            </div>
            <div className={styles["right-landing"]}>
                <div className={styles["about-text"]}>
                    <div>
                        <b>Montreal-based</b> newly graduate student whose interests converge from <b>technology</b> to <b>design</b> to <b>psychology.</b> <br/><br/>
                        I am deeply passionate about <b>human-computer interaction</b> and enjoy the challenge of building products with the goal of <b>optimizing user experience</b>. <br/><br/>
                        My goal is to design and develop <b>inclusive</b> and <b>accessible</b> interfaces through the lens of <b>empathy</b> and <b>social awareness</b>. <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default landing;