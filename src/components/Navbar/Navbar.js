import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <div className="h-auto w-full border border-sky-900 border-b-[1px] border-t-0 border-l-0 border-r-0 z-20">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Slide direction="left">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 border border-sky-900 border-y-2 p-2 transition-all ease-in-out duration-300 hover:tracking-widest hover:border-x-2">
              <span className="text-zinc-500 text-font-ral">ankush</span>
              <span className="text-zinc-500 ml-1 text-font-pop">SINGH</span>
            </div>
          </Slide>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Slide direction="right">
              <Link
                to="/"
                className="mr-5 text-zinc-500 hover:text-gray-900 text-font-ral"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="mr-5 text-zinc-500 hover:text-gray-900 text-font-ral"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="mr-5 text-zinc-500 hover:text-gray-900 text-font-ral"
              >
                CONTACT
              </Link>
            </Slide>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
