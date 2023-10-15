import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Recent = ({ navigation }) => {
  return (
    <View>
      <View className="w-screen flex flex-row p-4 items-center">
        <View className="w-full">
          <Text className="text-4xl font-bold">Recent</Text>
          <Text className="text-neutral-400 text-xs font-normal">
            Get back to your flow
          </Text>
        </View>
        <View className="-left-12">
          <TouchableOpacity
          // onPress={() => navigation.navigate("ForgetPassword")}
          ></TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row items-start justify-start">
        <ScrollView
          className="pl-4 gap-4"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            className="w-36 h-36 rounded-lg"
            src="https://i.etsystatic.com/40322965/r/il/2401a1/4719730318/il_1588xN.4719730318_79d9.jpg"
          />
          <Image
            className="w-36 h-36 rounded-lg"
            src="https://i.etsystatic.com/9765682/r/il/93591e/4134099729/il_1588xN.4134099729_62dm.jpg"
          />
          <Image
            className="w-36 h-36 rounded-lg"
            src="https://i.etsystatic.com/40322965/r/il/2401a1/4719730318/il_1588xN.4719730318_79d9.jpg"
          />
          <Image
            className="w-36 h-36 rounded-lg"
            src="https://i.etsystatic.com/9765682/r/il/93591e/4134099729/il_1588xN.4134099729_62dm.jpg"
          />
          <Image
            className="w-36 h-36 rounded-lg"
            src="https://i.etsystatic.com/40322965/r/il/2401a1/4719730318/il_1588xN.4719730318_79d9.jpg"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Recent;
