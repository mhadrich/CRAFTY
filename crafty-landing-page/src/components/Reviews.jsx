import React from "react";
import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../../public/assets/images/pic1.png";
import img2 from "../../public/assets/images/pic2.png";
import img3 from "../../public/assets/images/pic3.png";

const Reviews = () => {
  let text1 =
    "Crafty has transformed my small craft business. The platform provides a fantastic space for crafters like me to showcase our creations and connect with a broader audience and the secure transactions give both me and my customers peace of mind. Thanks to Crafty";
  let text2 =
    "Crafty has been a game-changer for me! The app's diverse range of handcrafted products is a delight to explore. I've connected with talented artisans in my area and even attended a local crafting workshop through this platform. It's a perfect blend of creativity and community.";
  let text3 =
    "As someone new to crafting, Crafty has been my go-to app for inspiration and guidance. The community here is incredibly supportive, always ready to share tips and tricks. The ability to connect with local crafters has boosted my confidence and made this crafting journey truly enjoyable.";

  let name1 = "Lisa, Craft Vendor:";
  let name2 = "John, Craft Enthusiast:";
  let name3 = "Emma, Aspiring Crafter:";
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Reviews" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name={name1} text={text1} />
        <ReviewCard img={img2} name={name2} text={text2} />
        <ReviewCard img={img3} name={name3} text={text3} />
      </div>
    </div>
  );
};

export default Reviews;
