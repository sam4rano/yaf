import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";
import React from "react";

const Pay = () => {

    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

  
    const config = {
      public_key: "FLWPUBK_TEST-88212015506a95a9f383a29220eb0811-X",
      tx_ref: Date.now(),
      amount: " ",
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",

      customer: {
        email: " ",
        phone_number: "",
        name: " ",
      },

      customizations: {
        title: "YAI Donation",
        description: "Payment to support YAI initiative",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };

    const handleFlutterPayment = useFlutterwave(config);

  

  return (
    <section className="h-[520px] w-full pt-[8rem] mb-[2rem]">
      <div className="w-full p-[2rem] h-[400px] m-auto bg-white rounded-md shadow-xl ring-2 ring-teal-500 lg:max-w-xl">
        <h1 className="text-3xl pb-lg font-semibold text-center text-teal-500 underline uppercase decoration-wavy">
          DONATION
        </h1>
        <form className="flex flex-col gap-md">
          <div className="mb-8 w-full group">
            <label htmlFor="email">Name</label>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
          </div>
          <div className="mb-8 w-full group">
            <label htmlFor="email">Email address</label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
          </div>

          <div className="mb-4 w-full group">
            <label htmlFor="number">Phone</label>

            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
              name="number"
              id="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
          </div>
          <div className="mt-[2rem] w-full group">
            <button
                className="text-white p-[1rem] text-md bg-teal-500 hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-[#f1c40f] dark:focus:ring-blue-800"
                onClick={() => {
                handleFlutterPayment({
                    callback: (response) => {
                    console.log(response);
                    closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                });
                }}
            >
                DONATE 
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Pay;
