import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export default MyOrders = () => {
  return (
    <View className=" bg-[rgba(249,249,249,1)] flex flex-col gap-y-0 mt-9">
      <View className=" flex flex-col gap-y-0">
        <Text className="text-left text-[rgba(34,34,34,1)] text-[34px] font-bold tracking-[0] ">{`My Orders`}</Text>
      </View>
      <View className="h-6 w-6 flex flex-col gap-y-0 ">
        <Svg
          className=" bottom-1"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <Path
            d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
            fill="#222222"
          />
        </Svg>
      </View>
      <View className="h-[30px] w-[340px]">
        <View className=" h-[30px] w-[100px] flex flex-col gap-y-0">
          <View className="bg-[rgba(34,34,34,1)] rounded-[29px] inset-0" />
          <Text className="text-center text-white text-base font-medium tracking-[0] ">{`Delivered`}</Text>
        </View>
        <View className=" h-[30] w-[100]">
          <Text className="text-['rgba(34;34;34;1)'] ">{`Processing`}</Text>
        </View>
        <View className=" h-[30] w-[100]">
          <Text className="text-['rgba(34;34;34;1)'] ">{`Cancelled`}</Text>
        </View>
      </View>
      <View className="h-[24] w-[24]">
        <Svg
          className="w-[9] h-[16] "
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.225521 8.54307C-0.0751736 8.24288 -0.0751736 7.7579 0.225521 7.45693L7.362 0.325723C7.79608 -0.108574 8.50232 -0.108574 8.93717 0.325723C9.37125 0.76002 9.37125 1.46488 8.93717 1.89917L2.83231 8.00039L8.93717 14.1C9.37125 14.5351 9.37125 15.24 8.93717 15.6743C8.50232 16.1086 7.79608 16.1086 7.362 15.6743L0.225521 8.54307Z"
            fill="#222222"
          />
        </Svg>
      </View>
      <View className="h-[540] w-[344] ">
        <View className="h-[164] w-[343] ">
          <View className="bg-white shadow-md rounded-lg p-4" />
          <View className="flex justify-between items-center">
            <View className="flex justify-between items-center" />
            <Text className="text-lg font-semibold">{`Details`}</Text>
          </View>
          <Text className="text-yellow-600">{`Delivered`}</Text>
          <Text className="text-sm text-gray-500">{`Order №1947034`}</Text>
          <View className="mt-2">
            <Text className="flex justify-between">{`Quantity:`}</Text>
            <Text className="text-gray-500">{`3`}</Text>
          </View>
          <View className="flex justify-between">
            <Text>{`Tracking number:`}</Text>
            <Text className="font-semibold">{`IW3475453455`}</Text>
          </View>
          <View className="flex justify-between">
            <Text>{`Total Amount:`}</Text>
            <Text className="font-semibold">{`112$`}</Text>
          </View>
          <Text className="text-gray-500 mt-2">{`05-12-2019`}</Text>
        </View>
      </View>
    </View>
  );
};
