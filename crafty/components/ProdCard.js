import { View, Text, Image, Pressable, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import HeartIcon from "./HeartIcon";
import { Rating } from "react-native-ratings";
import { Cloudinary } from "@cloudinary/url-gen";

<<<<<<< HEAD
const ProdCard = ({ navigation ,data}) => {
  
  useEffect(()=>{

    console.log("🚀 ~ file: ProdCard.js:8 ~ ProdCard ~ data 👌👌👌:", data.name)


  
  },[])
=======
const ProdCard = ({ navigation }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "ddtfqfamn" } });
>>>>>>> 65f4c0d4de218ca17e0509eadf2a656ca78decee
  const color = useColorScheme();
  const [like, setLike] = useState(false);
  const myImage = cld.image("sample");
  return (
    <View className="pr-4">
<<<<<<< HEAD
      <Pressable onPress={()=>navigation.navigate("ProductDetail",{data})}>
=======
      <Pressable onPress={() => navigation.navigate("ProductDetail")}>
>>>>>>> 65f4c0d4de218ca17e0509eadf2a656ca78decee
        <Image
          className="w-40 h-44 rounded-lg"
          // src={data.images[0].url}
        />
      </Pressable>
      <Pressable
        onPressOut={() => setLike(!like)}
        className="-top-5 -right-32 "
      >
        <HeartIcon state={like} />
      </Pressable>
      <View className="-top-8  items-start justify-start">
        <View className="flex flex-row pb-1">
          <Rating
            startingValue={2.5} // THIS TO UPDATE THE VALUES
            type="custom" // KEEP ON CUSTOMS TO ENABLE COLOR CHOICE
            ratingColor="#FFBA49" // YELLOW COLOR
            tintColor={color === "dark" ? "#111111" : "#f4f4f4"} // DO NOT UPDATE THIS
            ratingBackgroundColor="#d5d5d5" // STARS GRAY
            readonly={true}
            imageSize={16}
          />
          <Text className="text-neutral-400 text-xs">({data.reviews.lenght})</Text> 
        </View>
<<<<<<< HEAD
        <Text className="dark:text-white text-neutral-400 text-xs">{data.user.name || "RG"}</Text>
         <Text className="dark:text-white w-28 text-base font-semibold">{data.name}</Text> 
        <Text className="dark:text-white w-11 text-sm font-medium leading-tight">{data.price}$</Text>
=======
        <Text className="dark:text-white text-neutral-400 text-xs">Makah</Text>
        <Text className="dark:text-white w-28 text-base font-semibold">
          Wood Map
        </Text>
        <Text className="dark:text-white w-11 text-sm font-medium leading-tight">
          30$
        </Text>
>>>>>>> 65f4c0d4de218ca17e0509eadf2a656ca78decee
      </View>
    </View>
  );
};

export default ProdCard;
