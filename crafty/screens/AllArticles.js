import { View, Text } from "react-native";
import React from "react";
import CategoryPill from "../components/Home/CategoryPill";
import FilteringButtons from "../components/Home/FilteringButtons";
import { ScrollView } from "react-native-gesture-handler";
import ArticleCard from "../components/ArticleCard";

const AllArticles = () => {
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
      <ScrollView className="w-screen pt-5" showsVerticalScrollIndicator={false}>
        <View className="-top-2 flex scale-90 flex-row ">
          <ArticleCard />
          <ArticleCard />
        </View>
        <View className="-top-2 flex scale-90 flex-row ">
          <ArticleCard />
          <ArticleCard />
        </View>
        <View className="-top-2 flex scale-90 flex-row ">
          <ArticleCard />
          <ArticleCard />
        </View>
        <View className="-top-2 flex scale-90 flex-row ">
          <ArticleCard />
          <ArticleCard />
        </View>
        <View className="-top-2 flex scale-90 flex-row ">
          <ArticleCard />
          <ArticleCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default AllArticles;
