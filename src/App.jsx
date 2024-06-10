import "./styles/sass/style.scss";
import "animate.css";
import { RotatingLines } from "react-loader-spinner";

import { useState, useEffect } from "react";
import { Suspense } from "react";

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
      <Suspense fallback={<Loading />}>
        <div className="page-content">
          {activeTab === "" && (
            <Home
              handleTabClick={handleTabClick}
              headerContent={headerContent[0]}
            />
          )}
          {activeTab === "about" && (
            <About
              handleTabClick={handleTabClick}
              headerContent={headerContent[1]}
            />
          )}
          {activeTab === "fun-stuff" && <FunStuff />}
          {activeTab === "projects" && (
            <Projects
              handleTabClick={handleTabClick}
              headerContent={headerContent[2]}
            />
          )}
          {activeTab === "contact" && (
            <Contact headerContent={headerContent[3]} />
          )}
        </div>
      </Suspense>

      <Footer handleTabClick={handleTabClick} />
    </div>
  );
}

function Loading() {
  return (
    <div className="loading">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="#171717"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default App;
