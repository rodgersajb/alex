import "./styles/sass/style.scss";
import "animate.css";

import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

import { Nav } from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import FunStuff from "./components/FunStuff";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { headerContent } from "./hooks/HeaderContent";

function App() {
  const [activeTab, setActiveTab] = useState("");

  const [navScrolled, setNavScrolled] = useState(false);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "600px",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (track) => {
    setActiveTab(track);
    window.scrollTo(0, 0);
  };
  return (
    <div className="app">
      <Nav
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        navScrolled={navScrolled}
      />
      
        <div className="page-content">
          {activeTab === "" && <Home props={headerContent[0]} />}
          {activeTab === "about" && <About props={headerContent[1]} />}
          {activeTab === "fun-stuff" && <FunStuff />}
          {activeTab === "projects" && <Projects props={headerContent[2]} />}
          {activeTab === "contact" && <Contact props={headerContent[3]} />}
        </div>

        <Footer handleTabClick={handleTabClick} />
      
    </div>
  );
}

export default App;
