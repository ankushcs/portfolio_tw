import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero_img from "../../assets/img_1.jpeg";
import { CiLinkedin, CiTwitter, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fade, { Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="bg-black fixed overflow-scroll">
      <div className="relative z-0 min-h-screen lg:h-dvh overflow-y-auto pb-96 md:pb-24 lg:overflow-hidden">
        <div className="bg-zinc-800 w-80 h-80 rounded-md fixed top-2 left-2 z-[-10] lg:top-5 lg:left-10"></div>
        <div className="bg-zinc-800 w-80 h-80 rounded-md fixed bottom-2 right-2 z-[-10] lg:bottom-5 lg:right-10"></div>
        <div className="flex justify-center items-center h-screen w-screen bg-transparent z-20 py-5 md:py-10">
          <div className="bg-slate-800 h-full w-11/12 rounded-md z-auto overflow-y-auto">
            <Navbar />
            <section className="text-gray-400 bg-gray-900 body-font lg:h-full flex justify-center py-24">
              <div className="container mx-auto flex px-5 py-14 md:flex-col lg:flex-row md:py-10 flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center items-center">
                  <Fade left>
                    <img
                      className="object-cover object-center rounded lg:h-96 md:mb-10 lg:mb-0"
                      alt="hero"
                      src={Hero_img}
                    />
                  </Fade>
                </div>
                <div className="lg:flex-grow md:w-11/12 lg:pl-0 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-font-pop">
                    <Fade cascade damping={0.2}>
                      Ankush Singh
                    </Fade>
                  </h1>
                  <p className="mb-8 leading-relaxed lg:mr-20 text-font-ral">
                    <Slide>
                      "As a passionate Front-End Developer, I thrive on the
                      dynamic nature of web development. Dedication to my craft
                      is evident in my ongoing commitment to learning and
                      incorporating cutting-edge technologies. By staying
                      attuned to the latest market trends, I ensure that my
                      skill set is always ahead of the curve. This proactive
                      approach allows me to deliver top-notch solutions to
                      clients, continuously elevating the standard of my work in
                      a rapidly evolving industry."
                    </Slide>
                  </p>
                  <Fade>
                    <div className="flex lg:flex-row md:flex-wrap text-gray-300 gap-4">
                      <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none border border-sky-900">
                        <a
                          href="https://www.linkedin.com/in/ankush-931b6483/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CiLinkedin className="text-3xl" />
                        </a>
                      </button>
                      <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none border border-sky-900">
                        <a
                          href="https://twitter.com/tweetofankush"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CiTwitter className="text-3xl" />
                        </a>
                      </button>
                      <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none border border-sky-900">
                        <a
                          href="https://github.com/ankushcs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="text-3xl" />
                        </a>
                      </button>
                      <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none border border-sky-900">
                        <Link to="/contact">
                          <CiMail className="text-3xl" />
                        </Link>
                      </button>
                    </div>
                  </Fade>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
