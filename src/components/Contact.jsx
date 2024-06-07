import ContactForm from "./ContactForm";
import Footer from "./Footer";

import layingdoodle from "../assets/LayingDoodle-svg.jpg";

import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaHandPointDown,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <header>
        <div className="wrapper">
          <div className="flex-column">
            <img src={layingdoodle} alt="" />
            <h2 className="highlighter-prim mobile">Contact Alex</h2>
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
            <h2 className="highlighter-prim desktop">Contact Alex</h2>
            <h5>
              <span className="highlighter-second white">Question?</span>{" "}
              Thinking about working together but need to know more? Need a
              <span className="highlighter-contrast white"> hot sauce </span>
              recipe?
            </h5>
            <h5></h5>
            <h5>
              Feel free to
              <span className="highlighter-prim white"> drop me a line.</span>
              <FaHandPointDown />
            </h5>
          </div>
        </div>
      </header>

      <ContactForm />
    </section>
  );
};

export default Contact;
