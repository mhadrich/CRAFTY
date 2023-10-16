import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";

export default MyOrders = () => {
  return (
    <View className=" bg-[rgba(249,249,249,1)] flex flex-col  mt-[18%] ">
      <View className=" flex flex-col  ml-4">
        <Text className="text-left text-[rgba(34,34,34,1)] text-[34px] font-bold tracking-[0] ">{`My Orders`}</Text>
      </View>

      <View className="flex flex-row items-center p-5 justify-center">
        <View className=" flex flex-col ">
          <View className="bg-[rgba(34,34,34,1)]  inset-0  " />
          <Text className="text-center text-white text-base font-medium  p-3 pl-7 pr-7 mr-5  bg-black rounded-[200px]  ">{`Delivered`}</Text>
        </View>
        <View className=" ">
          <Text className="text-['rgba(34;34;34;1)'] mr-5 p-3">{`Processing`}</Text>
        </View>
        <View className=" ">
          <Text className="text-['rgba(34;34;34;1)'] p-3 ">{`Cancelled`}</Text>
        </View>
      </View>
      <View className="flex justify-between items-center mb-5">
        <Text className="text-lg font-semibold">{`Details`}</Text>
      </View>
      <View className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-1">
        <View className=" flex flex-row items-center justify-between ">
          <Text className="text-sm font-semibold ">{`Order №1947034`}</Text>
          <Text className="text-gray-500 mt-2">{`05-12-2019`}</Text>
        </View>
        <View className="mt-2 flex flex-row items-center">
          <Text>{`Tracking number : `}</Text>
          <Text className="font-semibold">{`  IW3475453455`}</Text>
        </View>
        <View className="mt-2 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Text className="flex justify-between">{`Quantity :`}</Text>
            <Text className="text-gray-500">{`  3`}</Text>
          </View>
          <View className="flex flex-row items-center">
            <Text>{`Total Amount:`}</Text>
            <Text className="font-semibold">{`112$`}</Text>
          </View>
        </View>

        <View className=""></View>

        <TouchableOpacity className="  hover:underline mt-5 flex flex-row items-center justify-between ">
          <Text
            onPress={() => {}}
            className="text-center text-black text-base font-medium  p-3 pl-7 pr-7 mr-5 border-2 border-black rounded-[200px]  "
          >
            Detailes
          </Text>
          <Text className="text-[#707324] text-lg">Delivered</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
