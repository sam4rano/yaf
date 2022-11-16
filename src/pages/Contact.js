import React from "react";
// import Card from "../component/Card";
import NavToggle from "../component/NavToggle";
import Footer from "../component/Footer";
// import Modal from "../component/Modal";

const Contact = () => {
  return (
    <>
      <NavToggle />
      <div>
        <iframe
          className="h-[600px] w-full pt-[2rem]"
          title="YAF form"
          src="https://forms.gle/YFtKbyPteGYv4zJGA"
        ></iframe>
      </div>

      {/* <Modal />
      <div>
        <Card />
      </div> */}
      <Footer />
    </>
  );
};

export default Contact;
