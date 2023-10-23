import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import ItemReviewCard from "./ItemReviewCard";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Svg, Path } from "react-native-svg";
import { Rating } from "react-native-ratings";
import * as ImagePicker from "expo-image-picker";
import { Cloudinary } from "@cloudinary/url-gen";

const ItemReviewsList = ({ close }) => {
  const color = useColorScheme();
  const [writing, setWriting] = useState(false);
  const [image0, setImage0] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [images, setImages] = useState(image0, image1, image2);
  const [remove, setRemove] = useState("hidden");

  // const cloudinary = new Cloudinary({
  //   cloud: {
  //     cloudName: "ddtfqfamn",
  //   },
  //   url: {
  //     secure: true,
  //   },
  // });

  const cloudinary = new Cloudinary({
    cloud_name: "ddtfqfamn",
    api_key: "353754651858781",
    api_secret: "anpaciBczbcHWRa3o88SMGpL99I",
  });

  const uploadToCloudinary = async (uri) => {
    try {
      if (uri) {
        const response = await fetch(uri);
        const blob = await response.blob();

        const formData = new FormData();
        formData.append("file", blob, "image.jpg");
        formData.append("upload_preset", "owfrai3q");

        const cloudinaryURL =
          "https://api.cloudinary.com/v1_1/ddtfqfamn/image/upload";

        const result = await fetch(cloudinaryURL, {
          method: "POST",
          body: formData,
        });

        const data = await result.json();
        if (data.secure_url) {
          return data.secure_url;
        } else {
          console.error("Error uploading to Cloudinary:", data);
          return null;
        }
      } else {
        console.error("Invalid 'uri' provided for upload.");
        return null;
      }
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      return null;
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 3,
    });

    console.log(result);
    console.log("Cloudinary Object:", cloudinary);
    if (!result.canceled) {
      const urls = await Promise.all(
        result.assets.map(async (asset, index) => {
          const url = await uploadToCloudinary(asset.uri);
          return url || images[index];
        })
      );
      setImage0(urls[0]);
      setImage1(urls[1]);
      setImage2(urls[2]);
    }
  };

  return (
    <View>
      {/* READING Reviws */}
      <View className="mb-52 ">
        <View className={writing ? "hidden mb-96" : "mb-96"}>
          <Text className="text-2xl bottom-2 bg-white dark:bg-[#333333] dark:text-white font-semibold ">
            5 Comments
          </Text>
          {color === "light" && (
            <LinearGradient
              colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
              className="w-[1000px] -left-8  h-20 z-10"
            />
          )}
          {color === "dark" && (
            <LinearGradient
              colors={["rgba(51,51,51,1)", "rgba(51,51,51,0)"]}
              className="w-[1000px] -left-8  h-20 z-10"
            />
          )}
          <View className="bottom-20">
            <ScrollView className="pt-6">
              <ItemReviewCard />
              <ItemReviewCard />
              <ItemReviewCard />
              <ItemReviewCard />
            </ScrollView>
          </View>
          <View className="bottom-96 z-10 items-end ">
            <TouchableOpacity
              onPress={() => {
                setWriting(true);
              }}
              className="w-36 h-9 bg-[#BF9B7A] z-10 rounded-3xl flex flex-row items-center justify-center"
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
                Write a reaview
              </Text>
            </TouchableOpacity>
            {color === "light" && (
              <LinearGradient
                pointerEvents="none"
                colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
                className="w-[1000px] left-10 bottom-14 h-28 "
              />
            )}
            {color === "dark" && (
              <LinearGradient
                pointerEvents="none"
                colors={["rgba(51,51,51,0)", "rgba(51,51,51,1)"]}
                className="w-[1000px] left-10 bottom-14 h-28 "
              />
            )}
          </View>
        </View>
      </View>
      {/* WRITING  Reviws */}
      <View className={writing ? "bottom-56" : "bottom-56 hidden"}>
        <View className="justify-center items-center ">
          <Text className="text-center  text-lg font-semibold dark:text-white ">
            What is your rate ?
          </Text>
          <Rating
            startingValue={0} //THIS TO UPDATE THE VALUES
            type="custom"
            ratingColor="#FFBA49"
            tintColor={color==="light" ? "#ffffff" : "#333333"}
            ratingBackgroundColor="#d5d5d5"
            readonly={false}
            imageSize={45}
            className="mt-3"
          />
          <Text className="text-center text-lg font-semibold mt-4 dark:text-white">
            Please share your opinion {"\n"}about the product
          </Text>
          <TextInput
            placeholder="Your Review..."
            multiline={true}
            className="w-11/12 h-40 p-4 bg-[#f9f9f9] dark:bg-[#111111] dark:text-white rounded shadow mt-3"
          ></TextInput>
          <View className="flex flex-row w-11/12 mt-6 justify-start items-start">
            {image0 && (
              <Pressable onPress={() => setRemove("")}>
                <Image
                  source={{ uri: image0 }}
                  className="w-28 h-28 rounded shadow mr-3"
                />
              </Pressable>
            )}
            {image1 && (
              <Pressable onPress={() => setRemove("")}>
                <Image
                  source={{ uri: image1 }}
                  className="w-28 h-28 rounded shadow mr-3"
                />
              </Pressable>
            )}
            {image2 && (
              <Pressable onPress={() => setRemove("")}>
                <Image
                  source={{ uri: image2 }}
                  className="w-28 h-28 rounded shadow mr-3"
                />
              </Pressable>
            )}
            {(image0 === null || image1 === null || image2 === null) && (
              <TouchableOpacity
                onPress={() => {
                  pickImage();
                }}
                className="w-28 h-28 items-center justify-center bg-[#f9f9f9] dark:bg-[#111111] rounded shadow"
              >
                <View className="w-12 h-12 bg-[#BF9B7A] rounded-full mb-4 items-center justify-center">
                  <Svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <Path
                      d="M10.9999 14.4667C12.9145 14.4667 14.4665 12.9146 14.4665 11C14.4665 9.0854 12.9145 7.53333 10.9999 7.53333C9.08528 7.53333 7.5332 9.0854 7.5332 11C7.5332 12.9146 9.08528 14.4667 10.9999 14.4667Z"
                      fill={color==="light" ? "white" : "#111111"}
                    />
                    <Path
                      d="M7.75033 0.166626L5.76783 2.33329H2.33366C1.14199 2.33329 0.166992 3.30829 0.166992 4.49996V17.5C0.166992 18.6916 1.14199 19.6666 2.33366 19.6666H19.667C20.8587 19.6666 21.8337 18.6916 21.8337 17.5V4.49996C21.8337 3.30829 20.8587 2.33329 19.667 2.33329H16.2328L14.2503 0.166626H7.75033ZM11.0003 16.4166C8.01033 16.4166 5.58366 13.99 5.58366 11C5.58366 8.00996 8.01033 5.58329 11.0003 5.58329C13.9903 5.58329 16.417 8.00996 16.417 11C16.417 13.99 13.9903 16.4166 11.0003 16.4166Z"
                      fill={color==="light" ? "white" : "#111111"}
                    />
                  </Svg>
                </View>
                <Text className="text-center text-xs leading-3 dark:text-white">
                  Select up to {"\n"} 3 images
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              setImage0(null);
              setImage1(null);
              setImage2(null);
              setRemove("hidden");
            }}
            className={remove}
          >
            <Text className="text-xs text-red-500 opacity-80 mt-4">
              Do you wanna pick your images again?
            </Text>
          </TouchableOpacity>
          <Text
            className={
              remove === "hidden"
                ? "text-xs  text-red-500 opacity-0 mt-4"
                : "text-xs  text-red-500 hidden opacity-0 mt-4"
            }
          >
            Do you wanna pick your images again?
          </Text>
          <TouchableOpacity
            onPress={() => {
              close(false);
            }}
            className="bg-[#BF9B7A] text-white w-11/12 h-12 p-2 mt-4 rounded-full justify-center items-center"
          >
            <Text className="text-center text-white ">SEND REVIEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemReviewsList;
