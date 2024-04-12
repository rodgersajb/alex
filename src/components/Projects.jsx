import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import ProjectCards from "./ProjectCards";
import Footer from "./Footer";

const Projects = (props) => {
  return (
    <section className={props.props.class}>
      <header>
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
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
        <div className="flex-column">
          <img src={props.props.image} alt="" />
        </div>
      </header>

      <ProjectCards />
      <Footer />
    </section>
  );
};

export default Projects;
