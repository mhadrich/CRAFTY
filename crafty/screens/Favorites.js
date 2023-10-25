import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ProdCard from "../components/ProdCard";
import { useAuth } from "../components/Authprovider/Authprovider";
import axios from "axios";
import ADRESS_API from "../Api";
import { ScrollView } from "react-native-gesture-handler";
import TabNav from "../components/TabNav/TabNav";

const Favorites = ({ navigation }) => {
  const { authState, fav } = useAuth();

  const [data, setData] = useState([]);
  console.log(fav, "this");
  const GetFavorite = async () => {
    const userId =authState.userId*1
    try {
      const res = await axios.get(`http://${ADRESS_API}:4000/favourite/getfavourite/${userId}`);

      console.log("🚀 ~ file: Favorites.js:20 ~ GetFavorite ~ res:", res.data)
      
      if (res){
      setData(res.data)
      
    }
    } catch (error) {
      console.log("Error fetching favorites:", error);
      return []; 
    }
  }

  useEffect(() => {
    GetFavorite()
  }, []);

  return (
    <View className=" w-screen h-full justify-center items-center dark:bg-[#111111]">
      <TabNav navigation={navigation} />
      {data && data.length > 0 && (
        <ScrollView className="pt-6 pl-4" showsVerticalScrollIndicator={false}>
          <View className="flex flex-row gap-6">
            <View>
              {data.map((item, key) => {
                if (key % 2 === 0) {
                  return (
                    <ProdCard
                      navigation={navigation}
                      data={item.item}
                      key={key}
                    />
                  );
                }
              })}
            </View>
            <View>
              {data.map((item, key) => {
                if (key % 2 !== 0) {
                  return (
                    <ProdCard
                      navigation={navigation}
                      data={item.item}
                      key={key}
                    />
                  );
                }
              })}
            </View>
          </View>
        </ScrollView>
      )}
      {fav && fav.length === 0 && (
        <View className="justify-center items-center opacity-50">
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
