import styles from "./projects.module.scss";
import Project from "../../components/project/project"
import mcgillventures from "../../assets/mcgillventures.png";
import wepay from "../../assets/wepay.png";

const projects = () => {
    return (
        <div className={styles["projects-styled"]}>
            <Project image={mcgillventures}
                     title="McGill Ventures"
                     roles="Design & Development"
                     github="https://github.com/sandynguyen8928/McGillVentures"
                     figma="https://www.figma.com/file/IXKlD7xqvorstVxgN04kgC/McGillVentures?type=design&node-id=0%3A1&mode=design&t=48FAy8JvnR4DePnE-1"
            />
            <Project image={wepay}
                     title="WePay"
                     roles="Design"
                     figma="https://www.figma.com/file/kOwyZtKTU9Zg1MNlhBEYUM/WePay?type=design&node-id=15%3A205&mode=design&t=XwoUd6KBvRfd4dwW-1"
            />
        </div>
    )
}

export default projects;