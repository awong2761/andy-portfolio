import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.title = "Andy Wong"
  }, [])

  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;