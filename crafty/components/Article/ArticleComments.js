import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ArtComCard from "./ArtComCard";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Svg, Path } from "react-native-svg";

const ArticleComments = ({ close }) => {
  const [writing, setWriting] = useState(false);
  return (
    <View>
      {/* READING COMMENTS */}
      <View className={writing ? "hidden mb-96" : "mb-96"}>
        <Text className="text-2xl bottom-4 font-semibold leading-snug">
          8 Comments
        </Text>
        <LinearGradient
          colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
          className="w-[1000px] -left-8 bottom-4 h-20 z-10"
        />
        <View className="bottom-20">
          <ScrollView className="pt-6">
            <ArtComCard />
            <ArtComCard />
            <ArtComCard />
            <ArtComCard />
            <ArtComCard />
            <View className=" h-64"></View>
          </ScrollView>
        </View>
        <View className="bottom-64 z-10 items-end">

          
          <TouchableOpacity
            onPress={() => {
              setWriting(true)
              console.log("liked");
            }}
            className="w-32 h-9 bg-[#BF9B7A] bottom-16 z-10 rounded-3xl flex flex-row items-center justify-center"
          >
            <Svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
      {/* WRITING  COMMENTS */}
      <View className={writing ? "mb-10" : "mb-10 hidden"}>
        <View className="justify-center items-center gap-10">
          <Text className="text-center text-neutral-800 text-lg font-semibold leading-snug">
            Let us and others know what{"\n"}you liked about this read.
          </Text>
          <TextInput
            placeholder="Your Review..."
            multiline={true}
            numberOfLines={20}
            className="p-6 w-96 h-96 bg-[#f9f9f9] rounded-lg shadow"
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              close(false);
            }}
            className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-4 rounded-full justify-center items-center"
          >
            <Text className="text-center text-white ">SUBMIT REVIEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ArticleComments;
