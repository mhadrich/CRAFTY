import React from "react";
import img from "../../public/assets/about.png";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";

const About = () => {
  
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-3/4">
        <img className=" w-full md:w-3/4" src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2 mt-[5%]">
        <Heading title1="About" title2="Us?" />
        <p className=" text-lightText text-justify ">
          We are a dedicated team hailing from{" "}
          <span className="text-pink-500">RBK</span> , driven by a shared
          passion for crafting and innovation. CRAFTY represents our vision to
          unite craft enthusiasts and skilled artisans through an innovative
          mobile app. With our expertise and commitment, we aim to revolutionize
          the crafting experience, creating a platform that seamlessly connects
          talented crafters with those who appreciate the artistry and beauty of
          handmade creations. Join us on this creative journey and be a part of
          the CRAFTY community.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
