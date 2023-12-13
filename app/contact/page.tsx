import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import React from "react";

const Contact = () => {
  return (
    <>
      <Hero
        bg="./images/contact.png"
        title="Contact Us"
        text="Have questions or inquiries? We would love to hear from you. Use the form below or connect through alternative channels"
        page="contact"
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
