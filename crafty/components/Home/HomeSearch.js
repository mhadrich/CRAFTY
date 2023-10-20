import { View, Text, Pressable, Keyboard } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import TabNav from "../TabNav/TabNav";

const HomeSearch = ({ navigation }) => {
  const catName = "text-base px-10 font-normal";
  const separator = "w-screen opacity-10 border-t";
  return (
    <View>
      <TabNav navigation={navigation} />
      <ScrollView onScroll={Keyboard.dismiss}>
        <View className=" w-screen justify-center px-6 py-2 flex flex-row gap-2">
          <Pressable className="w-1/2 h-12 bg-[#BF9B7A] justify-center items-center rounded-3xl">
            <Text className=" text-white text-sm">VIEW ALL ITEMS</Text>
          </Pressable>
          <Pressable className="w-1/2 h-12 bg-[#BF9B7A] justify-center items-center rounded-3xl">
            <Text className=" text-white text-sm">VIEW ALL ARTICLES</Text>
          </Pressable>
        </View>
        <View className="items-start px-4 py-2">
          <Text className="text-center text-neutral-400 text-sm font-normal leading-tight">
            Choose category
          </Text>
        </View>
        <View className="items-start gap-5 py-2 pb-6">
          <Text className={catName}>Home & Living</Text>
          <View className={separator}></View>
          <Text className={catName}>Craft Supplies & Tools</Text>
          <View className={separator}></View>
          <Text className={catName}>Art & Collectibles</Text>
          <View className={separator}></View>
          <Text className={catName}>Clothing</Text>
          <View className={separator}></View>
          <Text className={catName}>Jewelry</Text>
          <View className={separator}></View>
          <Text className={catName}>Paper & Party Supplies</Text>
          <View className={separator}></View>
          <Text className={catName}>Accessories</Text>
          <View className={separator}></View>
          <Text className={catName}>Weddings</Text>
          <View className={separator}></View>
          <Text className={catName}>Bag & Purses</Text>
          <View className={separator}></View>
          <Text className={catName}>Books, Movies & Music</Text>
          <View className={separator}></View>
          <Text className={catName}>Toys & Games</Text>
          <View className={separator}></View>
          <Text className={catName}>Bath & Beauty</Text>
          <View className={separator}></View>
          <Text className={catName}>Electronics & Accessories</Text>
          <View className={separator}></View>
          <Text className={catName}>Pet Supplies</Text>
          <View className={separator}></View>
          <Text className={catName}>Shoes</Text>
        </View>
        <View className="h-24"></View>
      </ScrollView>
    </View>
  );
};

export default HomeSearch;