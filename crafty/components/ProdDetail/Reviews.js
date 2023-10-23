import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";

const ReviewData = [
  {
    StarsNumber: "****",
    Description:
      "Absolutely beautiful! I gifted this for a wedding shower and they loved it !",
  },
];

const Reviews = () => {
  const color = useColorScheme();
  return (
    <View>
      {ReviewData.map((data, index) => (
        <View
          key={index}
          className="w-56 h-24 bg-white dark:bg-[#333333] p-4 ml-4 mb-4 rounded-xl justify-center justify-items"
        >
          {/* <Text className="text-yellow-500">{data.StarsNumber}</Text> */}
          <Rating
          className="items-start mb-2"
            startingValue={3} //THIS TO UPDATE THE VALUES
            type="custom"
            ratingColor="#FFBA49"
            tintColor={color==="light" ? "#ffffff" : "#333333"}
            ratingBackgroundColor="#d5d5d5"
            readonly={true}
            imageSize={16}
          />
          <Text className="text-xs font-normal dark:text-white ">{data.Description}</Text>
        </View>
      ))}
    </View>
  );
};

export default Reviews;
