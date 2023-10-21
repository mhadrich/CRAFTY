import { View, Text, Pressable, useColorScheme } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeNavSearch = ({ navigation }) => {
  const color = useColorScheme();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("HomeSearch");
      }}
    >
      <View className="w-screen justify-center items-center">
        <View className="w-10/12 h-10 right-4 pl-8 bg-[#BF9B7A]  opacity-25 dark:opacity-50 rounded-3xl"></View>
        <Text className="absolute w-10/12 h-10 top-3 pl-4 opacity-70 dark:text-white">
          Search Crafty
        </Text>
        <Svg
          className="absolute top-2 right-20 opacity-50 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill={color==="light" ? "#222222" : "#f9f9f9"}
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

export default HomeNavSearch;
