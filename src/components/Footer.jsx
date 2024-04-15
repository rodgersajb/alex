import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
   

      <footer>
        <div className="wrapper">
          <h1>
            <a href="">Alex</a>
          </h1>
          <ul>
            <li>Home</li>
            <li>Fun Stuff</li>
          </ul>
          <ul>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <ul className="socials">
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      
   
  );
};

export default Footer;
