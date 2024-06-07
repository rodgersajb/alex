import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";





const Footer = ({handleTabClick}) => {
 

  return (
    <>
      
      <footer>
        <div className="wrapper">
          <h1>
            <a href="/">Alex</a>
          </h1>
          <ul>
            <li onClick={() => handleTabClick("about")}>About</li>
            <li onClick={() => handleTabClick("fun-stuff")}>Fun Stuff</li>
          </ul>
          <ul>
            <li onClick={() => handleTabClick("projects")}>Projects</li>
            <li onClick={() => handleTabClick("contact")}>Contact</li>
          </ul>
          <ul className="socials">
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
        </div>
      </footer>

      {/* {activeTab === "about" ? <About props={headerContent[1]} /> : null}
      {activeTab === "fun-stuff" && <FunStuff />}
      {activeTab === "projects" && <Projects props={headerContent[2]} />}
      {activeTab === "contact" && <Contact props={headerContent[3]} />} */}
    </>
  );
};

export default Footer;
