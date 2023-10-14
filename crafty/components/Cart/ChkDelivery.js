import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

const ChkDelivery = ({ fn }) => {
  const [regularSelect, setRegularSelect] = useState(false);
  const [expressSelect, setExpressSelect] = useState(false);

  return (
    <View className="gap-4 pb-6">
      <Text className="text-base font-medium">Delivery Method</Text>
      <View className="flex flex-row justify-between w-fit h-28 p-4">
        <Pressable
          onPress={() => {
            fn(5);
            setRegularSelect(true);
            setExpressSelect(false);
          }}
          className={
            regularSelect
              ? "w-5/12 h-18 bg-white rounded-lg shadow justify-center items-center border-2 border-[#707324]"
              : "w-5/12 h-18 bg-white rounded-lg shadow justify-center items-center"
          }
        >
          <Text className="text-base font-medium">Regular delivery</Text>
          <Text className="text-xs">1 to 2 Weeks</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            fn(15);
            setRegularSelect(false);
            setExpressSelect(true);
          }}
          className={
            expressSelect
              ? "w-5/12 h-18 bg-white rounded-lg shadow justify-center items-center border-2 border-[#707324]"
              : "w-5/12 h-18 bg-white rounded-lg shadow justify-center items-center"
          }
        >
          <Text className="text-base font-medium">Express delivery</Text>
          <Text className="text-xs">1 to 2 Days</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChkDelivery;
