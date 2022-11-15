import React from "react";
import Card from "../component/Card";
import NavToggle from "../component/NavToggle";
import Footer from "../component/Footer";
import Modal from "../component/Modal";

const Contact = () => {
  return (
    <>
      <NavToggle />
      <Modal />
      <div>
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
