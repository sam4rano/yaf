import React from "react";
import NavToggle from "../component/NavToggle";
import Footer from "../component/Footer";
// import Modal from "../component/Modal";

const Contact = () => {
  return (
    <>
      <NavToggle />
      <div>
        <iframe
          className="h-[600px] w-full pt-[4rem]"
          title="YAF form"
          src="https://forms.gle/Ad7ioLjqACq5F82C8"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
