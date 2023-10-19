import { View, Image } from "react-native";
import React, { useEffect } from "react";
const Logoimg = require("../assets/crafty.gif");

const Welcomepage = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("ArticleView");
    }, 2000);
  }, []);

  return (
    <View className="w-full h-full items-center justify-center bg-white">
      <Image className="scale-50 pt-60" source={Logoimg} />
    </View>
  );
};

export default Welcomepage;
