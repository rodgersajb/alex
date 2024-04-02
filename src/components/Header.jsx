import Alex from "../assets/alex2.png";

import { FaHandPointDown } from "react-icons/fa";

const Header = () => {
  return (
    <section className="home">
      <header>
        <div className="header-grid">
          <div className="header-content">
            <div className="headings-container">
              <h2>Oh Hi, </h2>
              <div className="flex">
                <h2 className="highlighter-accent">I`m Alex</h2>
                <FaHandPointDown />
              </div>

              <h2 className="highlighter-accent cursive-text">Web Developer</h2>
            </div>

            <div className="header-buttons">
              <button>Browse Project</button>
              <button>Get in Touch</button>
            </div>
          </div>
          <div className="header-image">
            <img src={Alex} alt="" />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
