// import React, { useState } from "react";
// import axios from "axios";

// const Pay = () => {

//     const [email, setEmail] = useState('');
//     const [number, setNumber] = useState("");
//     const [name, setName] = useState("");
//     const [submit, setSubmit] = useState("");

//     const url = "";

//     const form = new FormData();

//     form.append('email',email)
//     form.append("number", number);
//     form.append("name", name);
//     form.append("email", email);

//     async function paystackpay(e) {
//         e.preventDefault();

//         await axios.post(url,form, {
//             headers:{
//                 'X-Requested-With':'XMLHttpRequest',
//             }
//         }).then(response => {
//             let Data = ""
//         }).catch(function(error){
//             console.log(error)
//         })
//     }

//   return (
//     <section className="h-[500px] w-full pt-[8rem] mb-[2rem]">
    //   <div className="w-full p-[1rem] h-[350px] m-auto bg-white rounded-md shadow-xl ring-2 ring-teal-500 lg:max-w-xl">
    //     <h1 className="text-3xl pb-lg font-semibold text-center text-teal-500 underline uppercase decoration-wavy">
    //       SUPPORT
    //     </h1>
    //     <form className="flex flex-col gap-md">
    //       <div class="mb-5 w-full group">
    //         <label htmlFor="name">Name</label>
    //         <input
    //           onChange={(e) => setName(e.target.value)}
    //           value={name}
    //           type="text"
    //           name="name"
    //           id="name"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
    //           placeholder=" "
    //           required
    //         />
    //       </div>
    //       <div class="mb-5 w-full group">
    //         <label htmlFor="number">Phone Number</label>

    //         <input
    //           onChange={(e) => setNumber(e.target.value)}
    //           value={number}
    //           type="email"
    //           name="number"
    //           id="number"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
    //           placeholder=" "
    //           required
    //         />
    //       </div>
    //       <div class="mb-8 w-full group">
    //         <label htmlFor="email">Email address</label>

    //         <input
    //           onChange={(e) => setEmail(e.target.value)}
    //           value={email}
    //           type="email"
    //           name="floating_email"
    //           id="floating_email"
    //           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
    //           placeholder=" "
    //           required
    //         />
    //       </div>
    //       <div class="mb-2 w-full group">
    //         <button
    //         value="pay with paystack"
    //         onClick={paystackpay}
    //           type="submit"
    //           name="submit"
    //           class="text-white p-[1rem] text-md bg-teal-500 hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-[#f1c40f] dark:focus:ring-blue-800"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
//     </section>
//   );
// };

// export default Pay;
// import {handdlePayment} from './paymentInterFace'
// import { useState } from 'react'
// import React from 'react'

// const Pay = () => {

//     const [data, setData] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(data)
//     }

//     const handleChange = (e) => {
//         setData ({
//             ...data,
//             [e.target.name]:e.target.value
//         })
//     }
//   return (
//     <section className="h-[500px] w-full pt-[8rem] mb-[2rem]">
    //   <div className="w-full p-[2rem] h-[350px] m-auto bg-white rounded-md shadow-xl ring-2 ring-teal-500 lg:max-w-xl">
    //     <h1 className="text-3xl pb-lg font-semibold text-center text-teal-500 underline uppercase decoration-wavy">
    //       SUPPORT
    //     </h1>
    //     <form onSubmit={handleSubmit} className="flex flex-col gap-md">
    //       <div className="mb-8 w-full group">
    //         <label htmlFor="email">Email address</label>

    //         <input
    //           onChange={handleChange}
    //           type="email"
    //           name="email"
    //           id="email"
    //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
    //           placeholder=" "
    //           required
    //         />
    //       </div>

    //       <div className="mb-4 w-full group">
    //         <label htmlFor="number">Amount</label>

    //         <input
    //           onChange={handleChange}
    //           type="number"
    //           name="number"
    //           id="number"
    //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer"
    //           placeholder=" "
    //           required
    //         />
    //       </div>
    //       <div className="mt-[2rem] w-full group">
    //         <button
    //           value="pay with paystack"
    //           type="submit"
    //           name="submit"
    //           className="text-white p-[1rem] text-md bg-teal-500 hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-[#f1c40f] dark:focus:ring-blue-800"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
//     </section>
//   );
// }

// export default Pay
import { PaystackButton } from "react-paystack";
import { useState } from 'react'
import React from 'react'

const Pay = () => {

    

  const publicKey = "pk_test_dd0e844a6ef1d157ad60ac1f4595e327fedf8c4e";
  const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")


  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Donate Now",
    onSuccess: () =>
      alert("Thanks for donating for a greater cause! Come back soon!!"),
    onClose: () => alert("Wait! Your support is our oil"),
  };

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
            <PaystackButton
              className="text-white p-[1rem] text-md bg-teal-500 hover:bg-[#f1c40f] focus:ring-4 focus:outline-none focus:ring-teal-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-[#f1c40f] dark:focus:ring-blue-800"
              {...componentProps}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Pay



