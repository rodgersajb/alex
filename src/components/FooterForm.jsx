
const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="form-content">
        <h2>Feel like chatting? Me too.</h2>
        <h5>Throw me an email anytime. I will get back to you I promise.</h5>
      </div>
      <form
        action="https://formsubmit.co/7f3095a1a169339afa8ac7d95d4c0f84"
        method="POST"
      >
        <div className="inputs">
          <label htmlFor="first-name"> Name</label>
          <input name="name" id="first-name" type="text" placeholder="First Name" />
        </div>
        <div className="inputs">
          <label htmlFor="email">Email Address</label>
          <input name="email" id="email" type="email" placeholder="Email Address" />
        </div>
        <div className="inputs">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div className="submit-button">
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
