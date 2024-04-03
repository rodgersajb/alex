const ContactForm = () => {
  return (
    <form id="contact-form"action="">
      <div className="flex-column">
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" type="text" placeholder="First Name" />
      </div>
      <div className="flex-column">
        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" type="text" placeholder="...if you want" />
      </div>
      <div className="flex-column">
        <label htmlFor="email">
          {" "}
          Email<span className="required">*</span>
        </label>
        <input type="text" id="email" placeholder="Email Address" />
      </div>
      <div className="flex-column">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="subject" />
      </div>
      <div className="flex-column">
        <label htmlFor="message">
          Your Message <span className="required">*</span>
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          defaultValue="Your Message"
        >
          
        </textarea>
      </div>
      <div className="button-container">
        <button>Send Away!</button>
      </div>
    </form>
  );
};

export default ContactForm;
