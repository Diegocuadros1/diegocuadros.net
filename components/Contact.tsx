import React from "react";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold mb-5 text-center items-center">
          Are you <span className="text-purple">Ready </span> to Work with Me?
        </h1>
        <p className="text-center mx-10">
          Reach out to me today and let&apos;s discuss how we can both achieve
          our goals.
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <ContactForm />
      </div>
    </footer>
  );
};

export default Contact;
