import { View, useColorScheme } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const SearchNav = ({ navigation }) => {
  const color = useColorScheme();
  return (
    <View className="w-screen justify-center items-center">
      <View className="w-9/12 h-10 right-4 pl-8 bg-[#BF9B7A] opacity-25 dark:opacity-50 rounded-3xl"></View>
      <TextInput
        placeholder="Search Crafty"
        className="absolute w-10/12 h-10 px-8 opacity-70 dark:text-white"
      ></TextInput>
      <TouchableOpacity
        className="absolute bottom-2 left-24 opacity-50 "
        onPress={() => {
          
        }}
      >
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill={color==="light" ? "#222222" : "#f9f9f9"}
          />
        </Svg>
      </TouchableOpacity>
      {/* <Pressable className="absolute right-4 top-10 w-screen h-screen" onPress={Keyboard.dismiss}>
    </Pressable> */}
    </View>
  );
};

export default SearchNav;
