import Fresh from "../components/Home/Fresh";
import { View } from "react-native";
import React from "react";
import Karousel from "../components/Home/Carousel";
import { ScrollView } from "react-native-gesture-handler";
import Recent from "../components/Home/Recent";
import Articles from "../components/Home/Articles";

const Home = ({ navigation }) => {
  return (
    <View className="bg-[f9f9f9] justify-between items-center">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Karousel />
        <Fresh navigation={navigation} />
        <Recent />
        <View className="pb-6"></View>
        <Articles navigation={navigation} />
        <View className="pb-20"></View>
      </ScrollView>
    </View>
  );
};
export default Home;