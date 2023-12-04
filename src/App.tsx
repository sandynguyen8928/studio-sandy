import React from 'react';
import './App.css';
import Landing from "./pages/landing/landing";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
        <Landing />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
