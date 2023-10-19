import React from "react";
import img from "../../public/assets/hero.png";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-3/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight mr-[20%] mt-9 ml-[0%]">
          When
          <span className="text-brightGreen mr-[20%]"> crafting </span> <br />
          <span className="ml-[15%]"> meets innovation </span>
        </h2>
        <p className=" text-lightText mt-5 ml-[-5%] text-start text-[20px]">
          Unleash your creativity with CRAFTY - Your Gateway to Crafting
          Excellence.
        </p>
      </div>

      <div className=" w-full md:w-2/4">
        <img src="https://i.ibb.co/MR7WXFm/crafty.png" alt="img" />
      </div>
    </div>
  );
};

export default Home;
