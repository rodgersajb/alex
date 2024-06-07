import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import AboutGrid from "./AboutGrid";
import MyStory from "./MyStory";
import Routine from "./Routine";
import FooterForm from "./FooterForm";
import Footer from "./Footer";

const About = ( {handleTabClick, headerContent}) => {

  console.log(headerContent, 'header cotent')

  return (
    <section className={headerContent.class}>
      <header>
        <div className="wrapper">
          <div className="flex-column">
            <h2 className={headerContent.class}>{headerContent.title}</h2>
            <h2 className={headerContent.class}>{headerContent.heading2}</h2>
            <h2 className={headerContent.class}>
              {headerContent.heading3}
              {headerContent.icon}
            </h2>
            <div className="button-container">
              <button onClick={() => handleTabClick("projects")}>{headerContent.button1}</button>
              <button onClick={() => handleTabClick("contact")}>{headerContent.button2}</button>
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
      <AboutGrid />
      <MyStory />
      <Routine />
      <FooterForm />
    </section>
  );
};

export default About;
