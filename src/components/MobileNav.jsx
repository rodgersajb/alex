import { BiCodeAlt, BiMobileAlt, BiParty } from "react-icons/bi";
import { FaHandHolding } from "react-icons/fa";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <ul>
        <li>
          <FaHandHolding />
          <h5>About</h5>
        </li>
        <li>
          <BiParty />
          <h5>Fun Stuff</h5>
        </li>
        
        <li className="alex-logo">
          <h5 className="logo-text">AR</h5>
        </li>
        <li>
          <BiCodeAlt />
          <h5>Projects</h5>
        </li>
        <li>
          <BiMobileAlt />
          <h5>Contact</h5>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
