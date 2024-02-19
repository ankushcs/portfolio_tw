import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import emailLottie from "../../assets/emailLottie.json";
import { Slide } from "react-awesome-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ohyj69t",
        "template_6vbmg17",
        form.current,
        "3ZliAdI9I0gYgShUD"
      )
      .then((result) => {
        console.log(result);
        toast("Email sent!", {
          theme: "dark",
          progressStyle: { background: "#0c4a6e" },
          style: { background: "#082f49", color: "#9ca3af" },
        });
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-black fixed overflow-scroll">
      <div className="relative z-0 min-h-screen lg:h-dvh overflow-y-auto pb-96 md:pb-24 lg:overflow-hidden">
        <div className="bg-zinc-800 w-80 h-80 rounded-md fixed top-2 left-2 z-[-10] lg:top-5 lg:left-10"></div>
        <div className="bg-zinc-800 w-80 h-80 rounded-md fixed bottom-2 right-2 z-[-10] lg:bottom-5 lg:right-10"></div>
        <div className="flex justify-center items-center h-screen w-screen bg-transparent z-20 py-5 md:py-10">
          <div className="bg-slate-800 h-full w-11/12 rounded-md z-auto overflow-y-auto">
            <Navbar />
            <section className="text-gray-400 bg-gray-900 body-font relative py-24">
              <div className="container mx-auto flex px-5 py-14 md:flex-col lg:flex-row md:py-10 flex-col items-center">
                <div>
                  <Slide direction="left">
                    <Lottie className="lottie" animationData={emailLottie} />
                  </Slide>
                </div>
                <form
                  ref={form}
                  className="lg:w-2/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 lg:pl-10"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-white text-lg mb-1 font-medium title-font text-font-ral">
                    <Slide>Write to Me</Slide>
                  </h2>
                  <p className="leading-relaxed mb-5 text-font-ral">
                    <Slide>
                      Please fill up all the fields in the following form
                    </Slide>
                  </p>
                  <div className="relative mb-4">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-400 text-font-ral"
                    >
                      <Slide>Name</Slide>
                    </label>
                    <Slide direction="right">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-font-ral"
                      />
                    </Slide>
                  </div>
                  <div className="relative mb-4">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-400 text-font-ral"
                    >
                      <Slide>Email</Slide>
                    </label>
                    <Slide direction="right">
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-font-ral"
                      />
                    </Slide>
                  </div>
                  <div className="relative mb-4">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-400 text-font-ral"
                    >
                      <Slide>Message</Slide>
                    </label>
                    <Slide direction="right">
                      <textarea
                        required
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-font-ral"
                      ></textarea>
                    </Slide>
                  </div>
                  <Slide>
                    <button
                      className="text-white bg-sky-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-950 rounded text-lg text-font-ral"
                      type="submit"
                    >
                      Send
                    </button>
                  </Slide>
                  <p className="text-xs text-gray-400 text-opacity-90 mt-3 text-font-ral">
                    <Slide>* Expect the reply within 1-3 working days</Slide>
                  </p>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
