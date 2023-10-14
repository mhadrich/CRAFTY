import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const Success = ({ navigation }) => {
  const num = Math.floor(Math.random() * 5);
  const animationData = [
    require("../../assets/lotties/animation_0.json"),
    require("../../assets/lotties/animation_1.json"),
    require("../../assets/lotties/animation_2.json"),
    require("../../assets/lotties/animation_3.json"),
    require("../../assets/lotties/animation_4.json"),
  ];
  const animation = useRef(null);
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("Home")
    }, 2000);
  },[])
  return (
    <View className="bg-[#707324] w-screen h-screen items-center justify-center">
      <LottieView
        className="h-80"
        autoPlay
        ref={animation}
        source={animationData[num]}
      />
      <Text className="text-[#F2E0C9] text-4xl font-bold">Success!</Text>
      <Text className="text-center text-[#F2E0C9] text-sm font-normal leading-tight">Your order will be delivered soon.{'\n'}Thank you for choosing our app!</Text>
    </View>
  );
};

export default Success;
