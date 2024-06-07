import { BiCodeAlt, BiMobileAlt, BiParty } from "react-icons/bi";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";

import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useRef } from "react";




 export const Nav = ({activeTab, handleTabClick, navScrolled}) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "600px",
  });

  return (
    
      <nav ref={ref} className={`navbar ${navScrolled ? "nav__scrolled" : ""}`}>
        {entry?.isIntersecting && (
          <>
            <ul>
              <li
                className={`${
                  activeTab === "about" && !navScrolled
                    ? "highlighter-white"
                    : activeTab === "about" &&
                      navScrolled &&
                      "highlighter-contrast"
                }`}
                onClick={() => handleTabClick("about")}
              >
                About
              </li>
              <li
                className={`${
                  activeTab === "fun-stuff" && !navScrolled
                    ? "highlighter-white"
                    : activeTab === "fun-stuff" &&
                      navScrolled &&
                      "highlighter-contrast"
                }`}
                onClick={() => handleTabClick("fun-stuff")}
              >
                Fun Stuff
              </li>
              <li
                className={`${
                  activeTab === "projects" && !navScrolled
                    ? "highlighter-white"
                    : activeTab === "projects" &&
                      navScrolled &&
                      "highlighter-contrast"
                }`}
                onClick={() => handleTabClick("projects")}
              >
                Projects
              </li>
            </ul>
            <a href="">AR</a>
            <ul>
              <li
                className={`${
                  activeTab === "contact" && !navScrolled
                    ? "highlighter-white"
                    : activeTab === "contact" &&
                      navScrolled &&
                      "highlighter-contrast"
                }`}
                onClick={() => handleTabClick("contact")}
              >
                Contact
              </li>
              <li>
                <a href="https://linkedin.com/in/alex-rodgers-snm">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/rodgersajb">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://github.com/rodgersajb">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </>
        )}
      </nav>

      
   
  );
};

