import Fresh from "../components/Home/Fresh";
import { View } from "react-native";
import React from "react";
import Karousel from "../components/Home/Carousel";
import { ScrollView } from "react-native-gesture-handler";
import Recent from "../components/Home/Recent";
import Articles from "../components/Home/Articles";
import TabNav from "../components/TabNav/TabNav";

const Home = ({ navigation }) => {

  return (
    <View className="justify-between items-center">
      <TabNav navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Karousel />
        <Fresh navigation={navigation} />
        <Recent />
        <View className="pb-6"></View>
        <Articles navigation={navigation} />
        <View className="pb-32"></View>
      </ScrollView>
    </View>
  );
};
export default Home;