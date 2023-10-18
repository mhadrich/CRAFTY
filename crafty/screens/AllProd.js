import { View } from "react-native";
import React from "react";
import CategoryPill from "../components/Home/CategoryPill";
import FilteringButtons from "../components/Home/FilteringButtons";
import { ScrollView } from "react-native-gesture-handler";
import ProdCard from "../components/ProdCard";

const AllProd = ({ navigation }) => {
  const categories = [
    "Decor",
    "Kitchen",
    "Rugs",
    "Bathroom",
    "Garden",
    "Living",
  ];
  return (
    <View className="justify-center items-center">
      <View className="bg-white w-screen h-24 py-3 items-center justify-start">
        <CategoryPill category={categories} />
        <FilteringButtons />
      </View>
      <ScrollView
        className=" w-screen pl-7 pt-9 "
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-row">
          <ProdCard navigation={navigation}/>
          <View className="p-4" />
          <ProdCard navigation={navigation}/>
        </View>
        <View className="flex flex-row">
          <ProdCard navigation={navigation}/>
          <View className="p-4" />
          <ProdCard navigation={navigation}/>
        </View>
        <View className="flex flex-row">
          <ProdCard navigation={navigation}/>
          <View className="p-4" />
          <ProdCard navigation={navigation}/>
        </View>
        <View className="flex flex-row">
          <ProdCard navigation={navigation}/>
          <View className="p-4" />
          <ProdCard navigation={navigation}/>
        </View>
        <View className="flex flex-row">
          <ProdCard navigation={navigation}/>
          <View className="p-4" />
          <ProdCard navigation={navigation}/>
        </View>
       
      </ScrollView>
    </View>
  );
};

export default AllProd;
