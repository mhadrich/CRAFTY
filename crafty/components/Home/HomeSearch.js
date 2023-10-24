import { View, Text, Pressable, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import TabNav from "../TabNav/TabNav";
import axios from "axios";
import ADRESS_API from "../../Api";

const HomeSearch = ({ navigation }) => {
  // ITEMS DATA
  const [items, setItems] = useState([]);
  const GetData = () => {
    axios
      .get(`http://${ADRESS_API}:4000/item/getitems`)
      .then((response) => {
        console.log("🚀 ~ file: Fresh.js:14 ~ .then ~ response:", response);
        return setItems(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetData();
  }, []);
  // ARTICLES DATA
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`http://${ADRESS_API}:4000/article/getarticles`)
      .then((response) => {
        console.log(
          "🚀 ~ file: Articles.js:14 ~ useEffect ~ response.data👍:",
          response.data
        );
        return setArticles(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const CATEGORIES =
    "Home & Living,Craft Supplies & Tools,Art & Collectibles,Clothing,Jewelry,Paper & Party Supplies,Accessories,Weddings,Bag & Purses,Books, Movies & Music,Toys & Games,Bath & Beauty,Electronics & Accessories,Pet Supplies,Shoes".split(
      ","
    );
  const catName = "text-base dark:text-white px-10 font-normal bottom-1";
  const separator = "w-screen opacity-10 dark:border-white border-t";
  return (
    <View className="dark:bg-[#111111]">
      <TabNav navigation={navigation} />
      <ScrollView scrollEventThrottle={32} onScroll={Keyboard.dismiss}>
        <View className=" w-screen justify-center px-6 py-2 flex flex-row gap-2">
          <Pressable onPress={()=>{navigation.navigate("AllProd", { data: items })}} className="w-1/2 h-12 bg-[#BF9B7A] justify-center items-center rounded-3xl">
            <Text className=" text-white text-sm">VIEW ALL ITEMS</Text>
          </Pressable>
          <Pressable onPress={()=>{navigation.navigate("AllArticles", { data: articles })}} className="w-1/2 h-12 bg-[#BF9B7A] justify-center items-center rounded-3xl">
            <Text className=" text-white text-sm">VIEW ALL ARTICLES</Text>
          </Pressable>
        </View>
        <View className="items-start px-4 py-2">
          <Text className="text-center text-neutral-400 text-sm font-normal leading-tight">
            Choose category
          </Text>
        </View>
        <View>
          {CATEGORIES.map((element, key) => (
            <Pressable
              onPress={() => {
                console.log(element);
              }}
              className="items-start gap-4 py-2 pb-4"
              key={key}
            >
              <Text className={catName}>{element}</Text>
              <View className={separator}></View>
            </Pressable>
          ))}
        </View>
        <View className="h-24"></View>
      </ScrollView>
    </View>
  );
};

export default HomeSearch;
