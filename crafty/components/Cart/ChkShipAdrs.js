import { View, Text, Pressable } from "react-native";
import React from "react";

const ChkShipAdrs = ({ navigation, data, render }) => {
  return (
    <Pressable
      className="gap-4 pb-8"
      onPress={() => navigation.navigate("ShippingAddresses", data)}
    >
      <Text className="text-base font-medium dark:text-white">Shipping address</Text>
      <View className="w-fit h-28 bg-white dark:bg-[#333333] p-6 rounded-lg shadow">
        <View className="flex flex-row justify-between pb-2">
          <Text className="text-sm font-medium dark:text-white leading-tight">
            {render.name}
          </Text>
          <Text className="text-[#8C633F] text-sm leading-tight">Change</Text>
        </View>
      <Text className=" w-10/12 text-sm font-normal dark:text-white leading-tight">
          {render.street}, {render.city} {render.postal},{"\n"}
          {render.country}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChkShipAdrs;
