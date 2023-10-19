import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  console.log(Link, "links");
  return (
    <nav className="sticky top-0 z-10 bg-white bg-opacity-75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-row justify-between px-5 md:px-32">
        <div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="p-1 cursor-pointer"
          >
            <img
              className="w-[100%] h-9"
              src="https://i.ibb.co/MR7WXFm/crafty.png"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-5 font-medium p-1 text-lg mt-5">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#BF9B7A] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#BF9B7A] transition-all cursor-pointer"
          >
            OurApp
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#BF9B7A] transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#BF9B7A] transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${menu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className=" p-2">
          <AiOutlineMenu size={22} />
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#BF9B7A] transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#BF9B7A] transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="ourApp"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#BF9B7A] transition-all cursor-pointer"
        >
          OurApp
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#BF9B7A] transition-all cursor-pointer"
        >
          Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#BF9B7A] transition-all cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
