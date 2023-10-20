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
      <View className="mb-52 ">
        <View className={writing ? "hidden mb-96" : "mb-96"}>
          <Text className="text-2xl bottom-2 bg-white font-semibold ">
            5 Comments
          </Text>
          <LinearGradient
          colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
          className="w-[1000px] -left-8  h-4 z-10 bg-black"
        />
          <View>
            <ScrollView className="pt-6">
              <ItemReviewCard />
              <ItemReviewCard />
              <ItemReviewCard />
              <ItemReviewCard />
            </ScrollView>
          </View>
          <View className="bottom-64 z-10 items-end ">
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
              <Text className=" pl-3 text-white text-xs font-normal leading-3">
                Write a review
              </Text>
            </TouchableOpacity>
            <LinearGradient
              pointerEvents="none"
              colors={["rgba(255,255,255,0)", "rgba(255,255,255,0)"]}
              className="w-[1000px] left-10 bottom-32 h-28 "
            />
          </View>
        </View>
      </View>
      {/* WRITING  Reviws */}
      <View className="bg-[#f9f9f9] ">
        <View className={writing ? "mb-96" : "mb-96 hidden"}>
          <ScrollView className="px-2" showsHorizontalScrollIndicator={false}>
            <View className="justify-center items-center ">
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

              <View className="w-32 h-32 items-center justify-center bg-white rounded shadow mt-5 mr-60 ml-11">
                <View className="w-12 h-12 bg-[#BF9B7A] rounded-full mb-4 items-center justify-center">
                  <Svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M10.9999 14.4667C12.9145 14.4667 14.4665 12.9146 14.4665 11C14.4665 9.0854 12.9145 7.53333 10.9999 7.53333C9.08528 7.53333 7.5332 9.0854 7.5332 11C7.5332 12.9146 9.08528 14.4667 10.9999 14.4667Z"
                      fill="white"
                    />
                    <Path
                      d="M7.75033 0.166626L5.76783 2.33329H2.33366C1.14199 2.33329 0.166992 3.30829 0.166992 4.49996V17.5C0.166992 18.6916 1.14199 19.6666 2.33366 19.6666H19.667C20.8587 19.6666 21.8337 18.6916 21.8337 17.5V4.49996C21.8337 3.30829 20.8587 2.33329 19.667 2.33329H16.2328L14.2503 0.166626H7.75033ZM11.0003 16.4166C8.01033 16.4166 5.58366 13.99 5.58366 11C5.58366 8.00996 8.01033 5.58329 11.0003 5.58329C13.9903 5.58329 16.417 8.00996 16.417 11C16.417 13.99 13.9903 16.4166 11.0003 16.4166Z"
                      fill="white"
                    />
                  </Svg>
                </View>
                <Text className="text-center text-xs font-semibold leading-3">
                  Upload photos
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
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ItemReviewsList;
