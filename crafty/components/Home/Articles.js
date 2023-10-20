import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ArticleCard from "../ArticleCard";
import axios from "axios";
import ADRESS_API from "../../Api";

const Articles = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://${ADRESS_API}:4000/article/getarticles`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View>
      <View className="w-screen flex flex-row p-4 items-center">
        <View className="w-full">
          <Text className="text-4xl font-bold">Articles</Text>
          <Text className="text-neutral-400 text-xs font-normal">
            Crafted with love
          </Text>
        </View>
        <View className="-left-12">
          <TouchableOpacity
          onPress={() => navigation.navigate("AllArticles")}
          >
            <Text className="text-xs font-normal">View all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row items-start justify-start">
        <ScrollView
          className="pl-4"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <ArticleCard navigation={navigation} />
          <ArticleCard navigation={navigation} />
          <ArticleCard navigation={navigation} />
          <ArticleCard navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Articles;
