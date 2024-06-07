import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import ProjectCards from "./ProjectCards";

import FooterForm from "./FooterForm";

const Projects = (props) => {
  return (
    <section className={props.props.class}>
      <header>
        <div className="wrapper">

        <div className="flex-column">
          <h2 className={props.props.style1}>{props.props.heading1}</h2>
          <h4 className={props.props.style1}>{props.props.heading2}</h4>

          <div className="button-container">
            <button>{props.props.button1}</button>
            <button>{props.props.button2}</button>
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
          <img src={props.props.image} alt="" />
        </div>
        </div>
      </header>

      <ProjectCards />
      <FooterForm />
      
    </section>
  );
};

export default Projects;
