import { View, Text, Image } from "react-native";
import React, { useState } from "react";

const ArticleCard = () => {
  return (
    <View className="pr-4">
      <Image
        className="w-52 h-48 rounded-t-lg"
        src="https://i.etsystatic.com/40322965/r/il/2401a1/4719730318/il_1588xN.4719730318_79d9.jpg"
      />
      <View className="w-52 h-24 justify-center items-center bg-[#F2E0C9] rounded-b-lg">
        <Text className="text-black text-lg font-semibold">Gifts for her</Text>
      </View>
    </View>
  );
};

export default ArticleCard;
