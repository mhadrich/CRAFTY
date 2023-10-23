import React, { useState } from "react";
import img from "../../public/assets/contact.png";
import Heading from "../layout/Heading";
import Button from "../layout/Button";
import axios from "axios";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const verif = (name, email, msg) => {
    if (name.trim() === "" || email.trim() === "" || msg.trim() === "") {
      setError("Please fill out all fields.");
      return false;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verif(name, email, msg)) {
      axios
        .post("", {
          name: name,
          email: email,
          message: msg,
        })
        .then((res) => {
          setName("");
          setEmail("");
          setMsg("");
          toast.success(
            `Thank you, ${name}. Your message has been sent successfully. We will respond promptly.`
          );
        });
      // .catch((error) => {
      //   setError("Sorry, there was an error. Please try again.");
      // });
      setName("");
      setEmail("");
      setMsg("");
      toast.success(
        `Thank you, ${name}. Your message has been sent successfully. We will respond promptly.`
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Contact" title2="Us" />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex flex-col md:flex-row justify-between w-full ml-[10%] mt-[5%]">
        <form
          className="w-full md:w-2/5 space-y-5 pt-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Your Message</label>
            <textarea
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="userNumber"
              id="userNumber"
              placeholder="enter your message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-red-500">{error}</p>
          </div>
          <div className="flex flex-row justify-center">
            <Button title="Send Message" type="submit" />
          </div>
        </form>

        <div className="w-full md:w-2/4 ml-[20%]">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
