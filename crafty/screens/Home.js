import Fresh from "../components/Home/Fresh";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ScrollView } from "react-native-gesture-handler";
import Recent from "../components/Home/Recent";
import Articles from "../components/Home/Articles";
import TabNav from "../components/TabNav/TabNav";

const Home = ({ navigation }) => {
  const Images = [
    {
      uri: "https://i.etsystatic.com/19004189/r/il/8fc769/1908386711/il_1588xN.1908386711_cacv.jpg",
      text: "Gift Ideas for her",
    },
    {
      uri: "https://i.etsystatic.com/13396143/r/il/a78d5a/3811814613/il_1588xN.3811814613_lrcm.jpg",
      text: "Gift Ideas for him",
    },
    {
      uri: "https://i.etsystatic.com/26311045/r/il/7824cb/5440706491/il_1588xN.5440706491_bnt7.jpg",
      text: "Making Christmas Merrier",
    },
    {
      uri: "https://i.etsystatic.com/26931130/r/il/bcc9a4/3288056379/il_1588xN.3288056379_37zf.jpg",
      text: "Up your decor game",
    },
    {
      uri: "https://i.etsystatic.com/41735915/r/il/5e6246/5476187659/il_1588xN.5476187659_7msk.jpg",
      text: "Stand out from the crowd",
    },
    {
      uri: "https://i.etsystatic.com/25453291/r/il/0e2886/4199140515/il_1588xN.4199140515_wrnq.jpg",
      text: "For the groovy ones",
    },
  ];
  const width = Dimensions.get("window").width;
  return (
    <View className=" dark:bg-[#111111] justify-between items-center">
      <TabNav navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={width}
            height={width}
            autoPlay={true}
            data={Images}
            autoPlayInterval={5000}
            scrollAnimationDuration={2000}
            renderItem={({ item }) => (
              <View className="flex-1">
                <Image source={{ uri: item.uri }} className="flex-1" />
                <View className="absolute top-3/4 bottom-0 left-0 right-0 justify-center items-center">
                  <LinearGradient
                    pointerEvents="none"
                    colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
                    className="w-screen top-4 h-28"
                  />
                  <Text className="text-white bottom-14 font-bold text-3xl">
                    {item.text ? item.text : ""}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <Fresh navigation={navigation} />
        <Articles navigation={navigation} />
        <View className="pb-6"></View>
        <Recent />
        <View className="pb-32"></View>
      </ScrollView>
    </View>
  );
};
export default Home;
