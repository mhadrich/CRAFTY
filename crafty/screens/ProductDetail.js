import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";
import Karousel from "../components/Home/Carousel";
import Svg, { Path } from "react-native-svg";
import Accordion from "../components/Accordion";
import ProdCard from "../components/ProdCard";
import HeartIcon from "../components/HeartIcon";
import BagIcon from "../components/BagIcon";

const ProductDetail = () => {
  return (
    <ScrollView className="">
      <Karousel />
      <View className=" flex flex-row justify-between  mt-2 px-2 items-center">
        <TouchableOpacity className="h-12 w-72 rounded-lg border-1 border-slate-400  bg-white ">
          <Svg
            className="rotate-45 w-7 h-8 absolute ml-60 mt-2"
            viewBox="0 0 32 32"
          >
            <Path
              class="cls-1"
              d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z"
              fill="#101820"
            />
          </Svg>

          <Text className="mt-2 ml-2"> Message seller</Text>
        </TouchableOpacity>
      <View className="w-9 h-10">
          <HeartIcon />
          </View>
       
          <BagIcon />
       
      </View>
      <View className="flex  flex-row  ml-3 mt-4 space-x-48">
        <Text className="font-semibold text-2xl">A&C</Text>
        <Text className="font-semibold text-2xl ">$ 17.14</Text>
      </View>
      <Text className=" text-xs font-normal ml-3 text-slate-300">
        Item Name
      </Text>
      <Text className=" text-xs font-normal ml-3 text-yellow-300">* * * *</Text>
      <View>
      <Accordion/> 
      </View>
      <Text className="text-lg font-medium mt-4 ">You can also like this</Text>
      <View className="flex flex-row items-start justify-start">
        <ScrollView className="pl-4" horizontal={true}> 
          <ProdCard /> 
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
