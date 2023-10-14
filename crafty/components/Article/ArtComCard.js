import { View, Text, Image } from "react-native";
import React from "react";

const ArtComCard = () => {
  return (
    <View className="mb-8">
      <Image
        className="h-8 w-8 z-10 rounded-full"
        src="https://m.media-amazon.com/images/I/71NuppdNsIL.jpg"
      />
      <View className="bg-[#f9f9f9] left-4 shadow rounded-xl bottom-4 w-11/12">
        <View className="p-8 gap-10">
          <View className="flex flex-row justify-between">
            <Text className="text-sm font-semibold leading-3">Helene Moore</Text>
            <Text className="text-xs font-normal opacity-50 leading-3">
              June 5, 2019
            </Text>
          </View>
          <Text className="text-sm font-normal leading-tight">
            The coasters shipped immediately, which was awesome! However, the
            coasters only ship in a bit of bubble wrap and a bubble wrap
            envelope, no box for protection. A coaster was chipped (no
            surprise), and I don’t have any time to try and fix the situation.
            While the coasters are beautiful, the emblem is slightly off
            centered.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ArtComCard;
