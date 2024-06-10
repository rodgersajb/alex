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
    <>
      <nav className="mobile-nav">
        <ul>
          <li onClick={() => handleTabClick("about")}>
            <FaHandHolding
              className={`${activeTab === "about" ? "prim" : ""}`}
            />
            <h5 className={`${activeTab === "about" ? "prim" : ""}`}>About</h5>
          </li>
          <li onClick={() => handleTabClick("fun-stuff")}>
            <BiParty className={`${activeTab === "fun-stuff" ? "prim" : ""}`} />
            <h5 className={`${activeTab === "fun-stuff" ? "prim" : ""}`}>
              Fun Stuff
            </h5>
          </li>

          <li className="alex-logo">
            <a href="/" className="logo-text">AR</a>
          </li>
          <li onClick={() => handleTabClick("projects")}>
            <BiCodeAlt
              className={`${activeTab === "projects" ? "prim" : ""}`}
            />
            <h5 className={`${activeTab === "projects" ? "prim" : ""}`}>
              Projects
            </h5>
          </li>
          <li onClick={() => handleTabClick("contact")}>
            <BiMobileAlt
              className={`${activeTab === "contact" ? "prim" : ""}`}
            />
            <h5 className={`${activeTab === "contact" ? "prim" : ""}`}>
              Contact
            </h5>
          </li>
        </ul>
      </nav>
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
    </>
  );
};

