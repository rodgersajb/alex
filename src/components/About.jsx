import Alex from "../assets/alex2.png";

import AboutGrid from "./AboutGrid";

const About = () => {
  return (
    <section className="about">
      <header>
        <div className="header-grid">
          <div className="header-content">
            <div className="headings-container">
              <h2 className="highlighter-prim">About Alex</h2>
            </div>
          </div>
          <div className="header-image">
            <img src={Alex} alt="This is Alex, the developer of this portfolio!" />
          </div>
        </div>
      </header>
      <AboutGrid />
    </section>
  );
};

export default About;
