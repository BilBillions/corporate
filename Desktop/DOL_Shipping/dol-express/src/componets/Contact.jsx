// src/components/ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8k4eqm8",
        "template_li2h3ns",
        form.current,
        "O08V1a1YXI_hykG5b"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-3 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 transition-all"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

import React from 'react';

