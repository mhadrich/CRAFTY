import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProdCard from "../ProdCard";
import axios from "axios";
import ADRESS_API from "../../Api";

const Fresh = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://${ADRESS_API}:4000/item/getitems`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View>
      <View className="w-screen flex flex-row p-4 items-center">
        <View className="w-full">
          <Text className="text-4xl font-bold">Fresh</Text>
          <Text className="text-neutral-400 text-xs font-normal">
            You’ve never seen it before!
          </Text>
        </View>
        <View className="-left-12">
          <TouchableOpacity onPress={() => navigation.navigate("AllProd")}>
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
          <ProdCard navigation={navigation} />
          <ProdCard navigation={navigation} />
          <ProdCard navigation={navigation} />
          <ProdCard navigation={navigation} />
          <ProdCard navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Fresh;
