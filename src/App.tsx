import React, {useRef} from 'react';
import styles from "./App.module.scss";
import Landing from "./pages/landing/landing";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

function App() {

    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    };

    return (
        <div className={styles["App"]} onWheel={handleScroll} ref={containerRef}>
            <Landing />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
