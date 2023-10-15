import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import ItemReviewCard from "./ItemReviewCard";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Svg, Path, G, Rect } from "react-native-svg";
import { Rating } from "react-native-ratings";

const ItemReviewsList = ({ close }) => {
  const [writing, setWriting] = useState(false);

  return (
    <View>
      {/* READING Reviws */}
      <View className={writing ? "hidden mb-96" : "mb-96"}>
        {/* <Text className="text-2xl bottom-3 bg-white font-semibold ">
          5 Comments
        </Text> 
        <LinearGradient
          colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
          className="w-[1000px] -left-8 bottom-3 h-20 z-10 bg-black"
        /> */}
        <View className="bottom-2 mt-11">
          <ScrollView className="pt-6">
            <ItemReviewCard />
            <ItemReviewCard />
            <ItemReviewCard />
            <ItemReviewCard />
            <ItemReviewCard />
          </ScrollView>
        </View>
        <View className="bottom-64 z-10 items-end">
          <TouchableOpacity
            onPress={() => {
              setWriting(true);
              console.log("liked");
            }}
            className="w-36 h-9 bg-[#BF9B7A] bottom-16 z-10 rounded-3xl flex flex-row items-center justify-center"
          >
            <Svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10.292V13H2.70797L10.6947 5.01326L7.98669 2.3053L0 10.292ZM12.7888 2.91915C12.924 2.78422 13 2.60106 13 2.41005C13 2.21904 12.924 2.03588 12.7888 1.90095L11.0991 0.211181C10.9641 0.075979 10.781 0 10.59 0C10.3989 0 10.2158 0.075979 10.0809 0.211181L8.75937 1.53267L11.4673 4.24063L12.7888 2.91915V2.91915Z"
                fill="white"
              />
            </Svg>
            <Text className=" pl-2 text-white text-xs font-normal leading-3">
              Write a review
            </Text>
          </TouchableOpacity>
          <LinearGradient
            pointerEvents="none"
            colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,1)"]}
            className="w-[1000px] left-10 bottom-32 h-28"
          />
        </View>
      </View>
      {/* WRITING  Reviws */}
      <View className={writing ? "mb-10" : "mb-10 hidden"}>
        <View className="justify-center items-center  mt-1">
          <Text className="text-center text-neutral-800  text-lg font-semibold ">
            What is your rate ?
          </Text>
          <Rating
            startingValue={0} //THIS TO UPDATE THE VALUES
            type="custom"
            ratingColor="#FFBA49"
            tintColor="#f9f9f9"
            ratingBackgroundColor="#d5d5d5"
            readonly={false}
            imageSize={45}
            className="mt-3"
          />
          <Text className="text-center text-neutral-800 text-lg font-semibold mt-4">
            Please share your opinion {"\n"}about the product
          </Text>
          <TextInput
            placeholder="Your Review..."
            multiline={true}
            className="w-80 h-40 bg-white rounded shadow mt-3"
          ></TextInput>

          <View className="w-32 h-32  bg-white rounded mr-48  items-center mt-14">
            <View className="w-14 h-14 bg-[#BF9B7A] rounded-full mt-5 items-center ">
              <Svg className="w-7 h-7 mt-3" viewBox="0 0 512 512" fill="#fff">
                <Path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z" />
              </Svg>
            </View>
            <Text className=" w-40 ml-5 mt-3 text-neutral-800 text-xs font-normal ">
              Add Your Photos
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              close(false);
            }}
            className="bg-[#BF9B7A] text-white w-80 h-12 p-2 mt-8 rounded-full justify-center items-center"
          >
            <Text className="text-center text-white ">SEND REVIEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemReviewsList;
