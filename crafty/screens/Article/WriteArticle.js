import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";

const WriteArticle = () => {
  const color = useColorScheme();
  return (
    <View className=" h-screen gap-4 p-4 items-center dark:bg-[#111111]">
      <Text className="text-lg font-semibold leading-snug dark:text-white">
        Give your article a title
      </Text>
      <TextInput
        className="mb-4 w-11/12 h-16 pl-3 bg-white dark:bg-[#333333] dark:text-white rounded-md shadow"
        placeholder={"Title"}
      />
      <View className="w-11/12 h-24 items-center justify-center bg-white dark:bg-[#333333] rounded shadow">
        <View className="w-12 h-12 bg-[#BF9B7A] rounded-full mb-2 items-center justify-center">
          <Svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <Path
              d="M10.9999 14.4667C12.9145 14.4667 14.4665 12.9146 14.4665 11C14.4665 9.0854 12.9145 7.53333 10.9999 7.53333C9.08528 7.53333 7.5332 9.0854 7.5332 11C7.5332 12.9146 9.08528 14.4667 10.9999 14.4667Z"
              fill={color==="light" ? "white" : "#333333"}
            />
            <Path
              d="M7.75033 0.166626L5.76783 2.33329H2.33366C1.14199 2.33329 0.166992 3.30829 0.166992 4.49996V17.5C0.166992 18.6916 1.14199 19.6666 2.33366 19.6666H19.667C20.8587 19.6666 21.8337 18.6916 21.8337 17.5V4.49996C21.8337 3.30829 20.8587 2.33329 19.667 2.33329H16.2328L14.2503 0.166626H7.75033ZM11.0003 16.4166C8.01033 16.4166 5.58366 13.99 5.58366 11C5.58366 8.00996 8.01033 5.58329 11.0003 5.58329C13.9903 5.58329 16.417 8.00996 16.417 11C16.417 13.99 13.9903 16.4166 11.0003 16.4166Z"
              fill={color==="light" ? "white" : "#333333"}
            />
          </Svg>
        </View>
        <Text className="text-center text-xs font-semibold leading-3 dark:text-white">
          Add a cover photo for your article
        </Text>
      </View>
      <Text className="text-lg font-semibold leading-snug dark:text-white">
        Here is where the magic happens!
      </Text>
      <TextInput
        placeholder="Your Review..."
        multiline={true}
        numberOfLines={20}
        className="p-6 w-11/12 h-96 bg-white dark:bg-[#333333] dark:text-white rounded-lg shadow"
      />
      <TouchableOpacity
        onPress={() => {
          close(false);
        }}
        className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-4 rounded-full justify-center items-center"
      >
        <Text className="text-center text-white ">SUBMIT ARTICLE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WriteArticle;
