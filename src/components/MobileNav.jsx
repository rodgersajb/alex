import { BiCodeAlt, BiMobileAlt, BiParty } from "react-icons/bi";
import { FaHandHolding } from "react-icons/fa";

import { useState } from "react";

import Header from "./Header";
import About from "./About";
import FunStuff from "./FunStuff";
import Projects from "./Projects";
import Contact from "./Contact";

const MobileNav = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (track) => {
    setActiveTab(track);
  };
  return (
    <>
      {activeTab === "" && <Header />}
      {activeTab === "about" && <About />}
      {activeTab === "fun-stuff" && <FunStuff />}
      {activeTab === "projects" && <Projects />}
      {activeTab === "contact" && <Contact />}

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
    </>
  );
};

export default MobileNav;
