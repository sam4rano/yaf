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
          className="h-[600px] w-full pt-[4rem]"
          title="YAF form"
          src="https://forms.gle/ZSWKpgi3oVAuZQHPA"
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
