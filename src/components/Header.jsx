import MobileNav from "./MobileNav";

import Alex from "../assets/alex-blur-orange.jpg";

const Header = () => {
  return (
    <header>
      <div className="header-grid">
        <div className="header-content">
          <h2>Oh Hi, </h2>
          <h2>I`m Alex</h2>
          <h2 className="highlighter-accent cursive-text">Web Developer</h2>
        </div>
        <div className="header-image">
          <img src={Alex} alt="" />
        </div>

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
