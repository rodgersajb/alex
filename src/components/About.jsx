import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import AboutGrid from "./AboutGrid";
import MyStory from "./MyStory";
import Routine from "./Routine";
import FooterForm from "./FooterForm";
import Footer from "./Footer";

const About = (props) => {
  return (
    <section className={props.props.class}>
      <header>
        <div className="wrapper">
          <div className="flex-column">
            <h2 className={props.class}>{props.props.title}</h2>
            <h2 className={props.class}>{props.props.heading2}</h2>
            <h2 className={props.class}>
              {props.props.heading3}
              {props.props.icon}
            </h2>
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
      <AboutGrid />
      <MyStory />
      <Routine />
      <FooterForm />
    </section>
  );
};

export default About;
