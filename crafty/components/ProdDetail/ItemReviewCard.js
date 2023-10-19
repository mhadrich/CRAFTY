import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { Svg, Path } from "react-native-svg";

import { useState } from "react";

const ItemReviewCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View className="mb-2">
      <Image
        className="h-11 w-11 z-10 rounded-full "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoovVYEMl5PlyrnrmjPY_0bH_k0RaXYByiMVOWeEhWeG9wxWP2ozVw0Ab51hiQzxErpo&usqp=CAU"
      />
      <View className="bg-[#f9f9f9] left-4 shadow rounded-xl bottom-5 w-11/12">
        <View className="p-5 ">
          <View className="flex flex-row justify-between">
            <Text className="text-sm font-semibold leading-2">Kate Doe</Text>
            <Text className="text-xs font-normal opacity-50 leading-3">
              june 7, 2019
            </Text>
          </View>

          <Rating
            startingValue={4} //THIS TO UPDATE THE VALUES
            type="custom"
            ratingColor="#FFBA49"
            tintColor="#fafafa"
            ratingBackgroundColor="#d5d5d5"
            readonly={true}
            imageSize={19}
            className="mr-[245px] mt-3 "
          />

          <Text className="text-sm font-normal leading-tight mt-4">
            Only saw a pic because I sent directly to the couple for a wedding
            anniversary gift but they looked just gorgeous, so well made and
            unique. The couple was blown away and absolutely loves them! They
            asked me where I got them from, they wanted more similar items 😉
          </Text>
          <TouchableOpacity onPress={toggleLike} >
            <View className="flex flex-row ml-22 ml-[210px] ">
              <Text className="text-neutral-400 text-s "> Helpful </Text>
              <Svg
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                className="mt-0"
              >
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 19.3594H8.36364V11.5594H6V19.3594ZM19 12.2094C19 11.4944 18.4682 10.9094 17.8182 10.9094H14.0895L14.6509 7.93887L14.6686 7.73087C14.6686 7.46437 14.5682 7.21737 14.4086 7.04187L13.7823 6.35938L9.89409 10.6429C9.67545 10.8769 9.54545 11.2019 9.54545 11.5594V18.0594C9.54545 18.7744 10.0773 19.3594 10.7273 19.3594H16.0455C16.5359 19.3594 16.9555 19.0344 17.1327 18.5664L18.9173 13.9839C18.9705 13.8344 19 13.6784 19 13.5094V12.2679L18.9941 12.2614L19 12.2094Z"
                  fill={isLiked ? "blue" : "#9B9B9B"}
                />
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemReviewCard;
