import React from "react";
import Navbar from "../Navbar/Navbar";
import Lottie from "lottie-react";
import aboutMeLottie from "../../assets/aboutMeLottie.json";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import Project_1 from "../../assets/project_job.json";
import Project_2 from "../../assets/project_food.json";
import { CiMobile3 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { GiMoebiusStar } from "react-icons/gi";
import Fade, { Slide } from "react-awesome-reveal";

const iconsArr = [
  {
    id: 1,
    iconName: FaHtml5,
    text: "HTML",
  },
  {
    id: 2,
    iconName: FaCss3Alt,
    text: "CSS",
  },
  {
    id: 3,
    iconName: IoLogoJavascript,
    text: "Javascript",
  },
  {
    id: 4,
    iconName: FaReact,
    text: "React",
  },
  {
    id: 5,
    iconName: FaGithub,
    text: "Github",
  },
  {
    id: 6,
    iconName: TbBrandVscode,
    text: "VS Code",
  },
];

const projectDetails = [
  {
    id: 1,
    heading: "Jobby App",
    img: Project_1,
    category: "React JS Project",
    description:
      "Developed a React application featuring Login, Home, Jobs, and Job item details pages with components, props, state, lists, event handlers, and form inputs. Implemented secure authentication through HTTP API calls, persisted user login state using JWT tokens, and utilized React Router for route management.",
    loginDetails: "Login Details : rahul, rahul@2021.",
    link: "https://ajobbyapp.netlify.app",
    tech_used: "React JS, REST API, JWT Token, Authorization, Authentication",
  },
  {
    id: 3,
    heading: "Restaurant Website",
    img: Project_2,
    category: "React JS Project",
    description:
      "Crafted a dynamic website employing a blend of HTML, CSS, JS, and React JS, complemented by other frontend languages. The development process incorporated the versatile react-reveal package to infuse engaging motion effects seamlessly. The website boasts various sections meticulously designed to ensure full responsiveness across diverse screen sizes.",
    link: "https://restaurantcloneankush.netlify.app/",
    tech_used: "React JS, JS, CSS, React-Reveal",
  },
];

const aboutCards = [
  {
    id: 1,
    icon: CiMobile3,
    title: "Responsive Design",
    content:
      "Embrace the mobile era with a responsive website design. I specialize in ensuring your content is visible to users across all devices, eliminating concerns about accessibility.",
  },
  {
    id: 2,
    title: "Clean Code",
    icon: FaLaptopCode,
    content:
      "I prioritize ensuring smooth and efficient code execution, freeing you to attend to other business aspects. Simplified code translates to reduced maintenance and decreased bug risks – a continual advantage!",
  },
  {
    id: 3,
    title: "Cutting Edge",
    icon: GiMoebiusStar,
    content:
      "I stay current with the latest tools and technologies, including ReactJS, NextJS, and Tailwind CSS, among others. I select the most suitable tools for each task, implementing them in the most efficient manner.",
  },
];

const About = () => {
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
                  <Slide>
                    <Lottie
                      className="object-cover object-center rounded lg:h-96"
                      animationData={aboutMeLottie}
                    />
                  </Slide>
                </div>
                <div className="lg:flex-grow md:w-11/12 lg:pl-0 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-font-pop">
                    <Fade cascade damping={0.2}>
                      About
                    </Fade>
                  </h1>
                  <Slide>
                    <p className="mb-8 leading-relaxed lg:mr-20 sm:mx-50 text-font-ral">
                      Welcome to my portfolio! With over 2.5 years of hands-on
                      experience, I am a dedicated frontend developer crafting
                      seamless, visually appealing digital experiences. My
                      versatile skill set includes HTML, CSS, JavaScript,
                      Bootstrap, React JS, hooks, tailwind CSS and Material-UI
                      (MUI). Whether building applications from the ground up or
                      enhancing existing projects, I leverage strong frontend
                      skills to deliver top-notch code, exceeding client
                      expectations. Fueled by a passion for continuous learning,
                      I seek to improve and enhance productivity, viewing each
                      project as an opportunity for growth. My commitment to
                      delivering high-quality code is unwavering, ensuring
                      client satisfaction and contributing to the success of
                      every venture. Beyond technical proficiency, I prioritize
                      communication, collaboration, and teamwork—essential
                      aspects for the seamless execution of projects. With a
                      dynamic approach and dedication, I'm ready to contribute
                      impactful digital experiences and exceptional outcomes to
                      new ventures. Let's collaborate and create something
                      extraordinary together!
                    </p>
                  </Slide>
                  <div className="flex flex-wrap text-gray-300 gap-4 md:justify-between lg:justify-normal md:w-full justify-center">
                    {iconsArr.map((icon) => (
                      <button
                        className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none border border-sky-900"
                        key={icon.id}
                      >
                        <Slide>
                          <icon.iconName className="text-3xl" />
                        </Slide>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* my project section */}
            <div className="min-h-full bg-black pt-24">
              <p className="heading text-center text-white text-3xl text-font-pop">
                My Recent Projects
              </p>
              <section className="text-gray-400 bg-black body-font">
                <div className="container px-5 py-14 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    {projectDetails.map((project) => (
                      <div className="p-4 lg:w-1/2" key={project.id}>
                        <Slide direction="right">
                          <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 m-auto w-5/6 mb-10 md:mb-0 flex justify-center items-center">
                              <Slide left>
                                <Lottie
                                  className="object-cover object-center rounded lg:h-96"
                                  animationData={project.img}
                                />
                              </Slide>
                            </div>
                            <h2 className="tracking-widest text-xs title-font font-medium text-sky-900 mb-1 text-font-ral">
                              {project.category.toUpperCase()}
                            </h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 text-font-ral">
                              {project.heading}
                            </h1>
                            <p className="leading-relaxed mb-3 text-font-ral">
                              {project.description}
                            </p>
                            {project.loginDetails && (
                              <p className="leading-relaxed mb-3 text-font-ral">
                                {project.loginDetails}
                              </p>
                            )}
                            <a
                              className="text-indigo-400 inline-flex items-center text-font-ral"
                              href={project.link}
                              target="_blank"
                            >
                              Click here to Visit
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                              <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm md:pr-3 py-1 text-font-ral">
                                <svg
                                  className="w-4 h-4 mr-1 hidden md:block"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                {project.tech_used}
                              </span>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Design sense section */}
            <section class="text-gray-400 bg-gray-900 body-font pb-14">
              <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4 text-font-pop">
                    Front-End developer with a{" "}
                    <span>
                      <Fade cascade damping={0.1}>
                        DESIGN SENSE
                      </Fade>
                    </span>
                  </h1>
                  <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80 text-font-ral">
                    Creating visually appealing websites is vital, but equally
                    crucial is ensuring the code is clear and maintainable.
                    Prioritize readability and organization to facilitate easy
                    maintenance and future development.
                  </p>
                  <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                  </div>
                </div>

                <div class="flex flex-wrap justify-center lg:justify-between sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 md:gap-5">
                  {aboutCards.map((card) => (
                    <div
                      class="p-4 w-80 md:w-11/12 lg:w-96 flex flex-col text-center items-center border border-sky-900 rounded-lg"
                      key={card.id}
                    >
                      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                        <card.icon className="text-3xl" />
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-white text-lg title-font font-medium mb-3 text-font-ral">
                          <Fade cascade damping={0.2}>
                            {card.title}
                          </Fade>
                        </h2>
                        <p class="leading-relaxed text-base text-font-ral">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
