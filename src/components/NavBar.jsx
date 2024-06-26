import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import { headerContent } from "../hooks/HeaderContent";

import Home from "./Home";
import About from "./About";
import FunStuff from "./FunStuff";
import Projects from "./Projects";
import Contact from "./Contact";

import { useState, useEffect, useRef } from "react";

import { useIntersectionObserver } from "@uidotdev/usehooks";

const NavBar = () => {
  // const navRef = useRef();

  // useEffect(() => {
  //   if (!navRef) return;
  //   const observer = new IntersectionObserver(([entry]) => {
  //     console.log(entry);

  //     observer.observe(navRef);
  //   });
  // }, [navRef]);
  const [activeTab, setActiveTab] = useState("");
  

  const handleTabClick = (track) => {
    setActiveTab(track);
  };
  return (
    <>
    {entry?.isIntersecting && (
        <nav ref={ref} className={`navbar ${navScrolled ? "nav__scrolled" : ""}`}>
        <ul>
          <li
            className={`${activeTab === "about" ? "color: red" : ""}`}
            onClick={() => handleTabClick("about")}
          >
            About
          </li>
          <li
            className={`${activeTab === "funstuff" ? "color: red" : ""}`}
            onClick={() => handleTabClick("fun-stuff")}
          >
            Fun Stuff
          </li>
          <li
            className={`${activeTab === "projects" ? "color: red" : ""}`}
            onClick={() => handleTabClick("projects")}
          >
            Projects
          </li>
        </ul>
        <a href="/">AR</a>
        <ul>
          <li
            className={`${activeTab === "contact" ? "color: red" : ""}`}
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </li>
          <li>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaGithub />
            </a>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    )}
    
      {activeTab === "" && <Home props={headerContent[0]} />}
      {activeTab === "about" && <About props={headerContent[1]} />}
      {activeTab === "fun-stuff" && <FunStuff />}
      {activeTab === "projects" && <Projects props={headerContent[2]} />}
      {activeTab === "contact" && <Contact props={headerContent[3]} />}
    </>
  );
};

export default NavBar;
