import { View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import loading from "../assets/lotties/loading.json"

const Loading = () => {
  const animation = useRef(null);
  return (
    <View className="bg-[#f9f9f9] dark:bg-[#111111] w-screen h-screen items-center justify-center">
      <LottieView
        className="h-60"
        autoPlay
        ref={animation}
        source={loading}
      />
    </View>
  );
};

export default Loading;
