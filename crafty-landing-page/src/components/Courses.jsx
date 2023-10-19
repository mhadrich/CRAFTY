import React from "react";
import Heading from "../layout/Heading";
import Card from "../layout/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import webImg from "../../public/assets/3777.jpg";
import appImg from "../../public/assets/28958.jpg";

const Courses = () => {
  let text1 =
    "Discover a world of finely crafted items on CRAFTY. Connect with skilled artisans, personalize your purchases, and support local talent. Join our vibrant community of craft enthusiasts.";
  let text2 =
    "Unleash your creative potential on CRAFTY. Showcase your work, engage with a global crafting community, and effortlessly sell your handcrafted items. Empower your craft and share it with the world.";

  return (
    <div className="min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Application" />

      <p className="text-lightText text-justify mt-4">
        Welcome to CRAFTY, where craftsmanship meets technology. Our app is not
        just a platform; it's a gateway to a thriving world of creativity and
        artistry. Connect, create, and be part of something exceptional.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <Card img={webImg} title="For Users" text={text1} />
        <Card img={appImg} title="For Crafters" text={text2} />
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl font-semibold">
          Coming Soon to Your Favorite App Stores:
        </p>
        <FontAwesomeIcon icon={faAppStore} size="4x" className="mx-6" />
        <FontAwesomeIcon icon={faGooglePlay} size="4x" className="mx-6" />
      </div>
    </div>
  );
};

export default Courses;
