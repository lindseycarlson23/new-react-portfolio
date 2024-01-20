import React from "react";
// import { navigate } from "gatsby";
import Recaptcha from "react-google-recaptcha";
const RECAPTCHA_KEY = "6LePelYpAAAAAB7KamK95m_Y_K5DpcvvcspkH8gw";

export default function ContactMe() {
  const [state, setState] = React.useState({});
  const recaptchaRef = React.createRef();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const recaptchaValue = recaptchaRef.current.getValue();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }).toString(),
    })
      // .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get in Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          I'd love to hear from you about employment, freelancing, and
          networking.
        </p>
      </div>

      <form
        className="contact--form--container"
        data-netlify="true"
        data-netlify-recaptcha="true"
        name="contact"
        method="post"
        // action="/thank-you"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        {/* <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Chooes a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Collaboration</option>
            <option>Employment</option>
            <option>Freelance</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        {/* <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <div data-netlify-recaptcha="true"></div>
        <div className="recaptcha--box">
          <Recaptcha
            ref={recaptchaRef}
            sitekey={RECAPTCHA_KEY}
            size="normal"
            id="recaptcha-google"
            onChange={() => setButtonDisabled(false)} // disable the disabled button!
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary contact--form--btn"
            disabled={buttonDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
