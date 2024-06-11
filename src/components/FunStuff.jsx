import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const FunStuff = ({ handleTabClick, headerContent }) => {
  return (
    <section className={headerContent.class}>
      <header>
        <div className="wrapper">
          <div className="flex-column">
            <h1>{headerContent.title}</h1>
            <h4>{headerContent.heading1}</h4>
            <p>{headerContent.heading2}</p>
            <div className="div button-container">
              <button onClick={() => handleTabClick("")}>
                {headerContent.button1}
              </button>
              <button onClick={() => handleTabClick("projects")}>
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
            <img
              src={headerContent.image}
              alt="A doodle of a person who is picking up papers they dropped"
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default FunStuff;
