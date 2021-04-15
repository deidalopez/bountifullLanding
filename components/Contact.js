import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("myylzyyp");
  if (state.succeeded) {
    return <p>Thanks for your interest!</p>;
  }
  return (
    <div className="contactSection" id="contact">
    <h2 id="contactText">Let's stay in touch</h2>
      <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            placeholder="Enter your email"
            type="email"
            name="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <button className="contactButton" type="submit" disabled={state.submitting}>
            Learn more
      </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;