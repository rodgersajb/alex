import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import ProjectCards from "./ProjectCards";

import FooterForm from "./FooterForm";

const Projects = ({ handleTabClick, headerContent }) => {
  return (
    <section className={headerContent.class}>
      <header>
        <div className="wrapper">
          <div className="flex-column">
            <h2 className={headerContent.style1}>{headerContent.heading1}</h2>
            <h4 className={headerContent.style1}>{headerContent.heading2}</h4>

            <div className="button-container">
              <button onClick={() => handleTabClick("")}>
                {headerContent.button1}
              </button>
              <button onClick={() => handleTabClick("contact")}>
                {headerContent.button2}
              </button>
            </div>
          </div>
          <div className="socials">
            <div className="border">
              <a href="https://github.com/rodgersajb">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/alex-rodgers-snm">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/rodgersajb">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="flex-column">
            <img src={headerContent.image} alt="" />
          </div>
        </div>
      </header>

      <ProjectCards />
      <FooterForm />
    </section>
  );
};

export default Projects;
