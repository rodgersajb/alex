import { BiCodeAlt, BiMobileAlt, BiParty } from "react-icons/bi";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";

import { useIntersectionObserver } from "@uidotdev/usehooks";

import Home from "./Home";
import About from "./About";
import FunStuff from "./FunStuff";
import Projects from "./Projects";
import Contact from "./Contact";

import { headerContent } from "../hooks/HeaderContent";

const MobileNav = () => {
  const [activeTab, setActiveTab] = useState("");

  const [navScrolled, setNavScrolled] = useState(true);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
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
  };
  return (
    <>
      <nav className="mobile-nav">
        <ul>
          <li
            className={`${activeTab === "" ? "color: red" : ""}`}
            onClick={() => handleTabClick("about")}
          >
            <FaHandHolding />
            <h5>About</h5>
          </li>
          <li
            className={`${activeTab === "" ? "color: red" : ""}`}
            onClick={() => handleTabClick("fun-stuff")}
          >
            <BiParty />
            <h5>Fun Stuff</h5>
          </li>

          <li className="alex-logo">
            <h5 className="logo-text">AR</h5>
          </li>
          <li
            className={`${activeTab === "" ? "color: red" : ""}`}
            onClick={() => handleTabClick("projects")}
          >
            <BiCodeAlt />
            <h5>Projects</h5>
          </li>
          <li
            className={`${activeTab === "" ? "color: red" : ""}`}
            onClick={() => handleTabClick("contact")}
          >
            <BiMobileAlt />
            <h5>Contact</h5>
          </li>
        </ul>
      </nav>
      
      <nav ref={ref} className={`navbar ${navScrolled ? "nav__scrolled" : ""}`}>
        {entry?.isIntersecting && (
          <>
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
            <a href="">AR</a>
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
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </>
        )}
      </nav>

      {activeTab === "" && <Home props={headerContent[0]} />}
      {activeTab === "about" && <About props={headerContent[1]} />}
      {activeTab === "fun-stuff" && <FunStuff />}
      {activeTab === "projects" && <Projects props={headerContent[2]} />}
      {activeTab === "contact" && <Contact props={headerContent[3]} />}
    </>
  );
};

export default MobileNav;
