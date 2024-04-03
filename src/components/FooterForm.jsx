const ContactForm = () => {
  return (
    <>
      <div className="form-content">
        <h2>Feel like chatting? Me too.</h2>
        <h5>Throw me an email anytime. I will get back to you I promise.</h5>
      </div>
      <form action="">
        <div className="inputs">
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" placeholder="First Name" />
        </div>
        <div className="inputs">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="text" placeholder="Email Address" />
        </div>
        <div className="inputs">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <div className="submit-button">
          <button>Submit Form</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
