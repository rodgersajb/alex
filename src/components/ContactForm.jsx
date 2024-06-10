const ContactForm = () => {
  



  return (
    <form
      id="contact-form"
      action="https://formsubmit.co/7f3095a1a169339afa8ac7d95d4c0f84"
      method="POST"
    >
      <div className="flex-column">
        <label htmlFor="first-name">First Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="First Name"
          required
        />
      </div>
      <div className="flex-column">
        <label htmlFor="last-name">Last Name</label>
        <input name="name" id="name" type="text" placeholder="...if you want" />
      </div>
      <div className="flex-column">
        <label htmlFor="email">
          Email<span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="flex-column">
        <label htmlFor="subject">Subject</label>
        <input name="subject" type="text" id="subject" placeholder="subject" />
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
          type="text"
          required
        ></textarea>
      </div>
      <div className="button-container">
       

        <button type="submit">
          Send Away!
        </button>
      
      </div>
    </form>
  );
};

export default ContactForm;
