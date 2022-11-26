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
          
          loading="lazy"
          src="https://docs.google.com/forms/d/e/1FAIpQLScvow0ZTitREYeZv7D-f0llkvZlzYrn99kBdJpuepNOq4Te7g/viewform?usp=sf_link"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
