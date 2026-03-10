import React from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_id",
      "template_id",
      e.target,
      "public_key"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactSection;