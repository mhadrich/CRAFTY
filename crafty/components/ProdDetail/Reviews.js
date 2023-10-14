import { View, Text } from "react-native";
import React from "react";

const ReviewData = [
  {
    StarsNumber: "****",
    Description:
      "These high quality personalized marble acrylic /mango wood coasters will make unique and one of a kind gifts for a wedding , anniversary ... ",
  },
  {
    StarsNumber: "**",
    Description:
      "These high quality personalized marble acrylic /mango wood coasters will make unique and one of a kind gifts for a wedding , anniversary ... ",
  },
  {
    StarsNumber: "******",
    Description:
      "These high quality personalized marble acrylic /mango wood coasters will make unique and one of a kind gifts for a wedding , anniversary ... ",
  },
  {
    StarsNumber: "***",
    Description:
      "These high quality personalized marble acrylic /mango wood coasters will make unique and one of a kind gifts for a wedding , anniversary ... ",
  },
  {
    StarsNumber: "***",
    Description:
      "These high quality personalized marble acrylic /mango wood coasters will make unique and one of a kind gifts for a wedding , anniversary ... ",
  },
];

const Reviews = ({ ReviewData }) => {
  return (
    <View>
      return (
      <View className="w-56 h-24 bg-white ml-5 mt-4">
        {ReviewData.map((data, index) => (
          <View key={index}>
            <Text key={StarsNumber}>{data.StarsNumber}</Text>
            <Text key={Description}>{data.Description}</Text>
          </View>
        ))}
      </View>
      );
    </View>
  );
};

export default Reviews;
