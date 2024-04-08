import ContactForm from "./ContactForm";

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
        <div className="flex-column">
          <img src={layingdoodle} alt="" />
          <h2 className="highlighter-prim">Contact Alex</h2>
        </div>
        <div className="socials">
          <div className="border">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
        <div className="flex-column">
          <h5>
            <span className="highlighter-second white">Question?</span> Thinking
            about working together but need to know more? Need a{" "}
            <span className="highlighter-contrast white">hot sauce </span>recipe?
          </h5>
          <h5></h5>
          <h5>
            Feel free to{" "}
            <span className="highlighter-prim white">drop me a line.</span>
            <FaHandPointDown />
          </h5>
        </div>
      </header>

      <ContactForm />
    </section>
  );
};

export default Contact;
