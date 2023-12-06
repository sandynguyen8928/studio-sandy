import React from 'react';
import styles from "./App.module.scss";
import Landing from "./pages/landing/landing";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

function App() {
    return (
        <div className={styles["App"]}>
            <Landing />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
