import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import HeartIcon from "./HeartIcon";
import { Rating, AirbnbRating } from "react-native-ratings";

const ProdCard = () => {
  const [like, setLike] = useState(false);
  return (
    <View className="pr-4">
      <Image
        className="w-40 h-44 rounded-lg"
        src="https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg"
      />
      <Pressable
        onPressOut={() => setLike(!like)}
        className="-top-5 -right-32 "
      >
        <HeartIcon state={like} />
      </Pressable>
      <View className="-top-8  items-start justify-start">
        <View className="flex flex-row pb-1">
          <Rating
            startingValue={2.5} // THIS TO UPDATE THE VALUES
            type="custom" // KEEP ON CUSTOMS TO ENABLE COLOR CHOICE
            ratingColor="#FFBA49" // YELLOW COLOR
            tintColor="#f4f4f4" // DO NOT UPDATE THIS
            ratingBackgroundColor="#d5d5d5" // STARS GRAY
            readonly={true}
            imageSize={16}
          />
          <Text className="text-neutral-400 text-xs">(24)</Text>
        </View>
        <Text className="text-neutral-400 text-xs">Makah</Text>
        <Text className="w-28 text-base font-semibold">Wood Map</Text>
        <Text className="w-11 text-sm font-medium leading-tight">30$</Text>
      </View>
    </View>
  );
};

export default ProdCard;
