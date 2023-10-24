import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ProdCard from "../components/ProdCard";
import { useAuth } from "../components/Authprovider/Authprovider";
import axios from "axios";
import ADRESS_API from "../Api";
import { ScrollView } from "react-native-gesture-handler";

const Favorites = ({ navigation }) => {
  const { authState, fav } = useAuth();

  const [data, setData] = useState([]);
  console.log(fav, "helloooo");

  // useEffect(() => {
  //   console.log("🚀 ~ file: Favorites.js:10 ~ Favorites ~  authState :",  fav )
  // }, [fav]);

  return (
    <View className=" w-screen h-full flex flex-col justify-center items-center dark:bg-[#111111]">
      {console.log("🚀 ~ file: Favorites.js:23 ~ Favorites ~ authState:", fav)}
      {fav && fav.length > 0 ? (
        fav.map((item, key) => (
          <ProdCard navigation={navigation} data={item.item} key={key} />
        ))
      ) : (
        <View className="justify-center items-center">
          <Text className="text-xl font-semibold dark:text-white mb-2">
            No favorites found
          </Text>
          <Text className="dark:text-white text-xs text-center">
            You can favorite a few items{"\n"}and articles then you can{"\n"}
            view them here
          </Text>
        </View>
      )}
    </View>
  );
};

export default Favorites;
