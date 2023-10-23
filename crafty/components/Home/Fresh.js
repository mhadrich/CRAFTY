import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProdCard from "../ProdCard";
import axios from "axios";
import ADRESS_API from "../../Api";

const Fresh = ({ navigation }) => {
  const [data, setData] = useState([]);
  const GetData =()=>{
    axios
    .get(`http://${ADRESS_API}:4000/item/getitems`)
    .then((response) => {
    console.log("🚀 ~ file: Fresh.js:14 ~ .then ~ response:", response)
    
      return setData(response.data) 
    })
    .catch((err) => console.log(err))
  }
  useEffect(() => {
   GetData()
  }, []);
  return (
    <View>
      <View className="w-screen flex flex-row p-4 items-center">
        <View className="w-full">
          <Text className=" dark:text-white text-4xl font-bold">Fresh</Text>
          <Text className="text-neutral-400 text-xs font-normal">
            You’ve never seen it before!
          </Text>
        </View>
        <View className="-left-12">
          <TouchableOpacity onPress={() => navigation.navigate("AllProd",{data:data})}>
            <Text className="dark:text-white text-xs font-normal">View all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row items-start justify-start">
        <ScrollView
          className="pl-4"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >{data && data.map((item,e) => {
          console.log("🚀 ~ file: Fresh.js:40 ~ >{data&&data.map ~ item:", item)
          
          return  (<ProdCard navigation={navigation} data={item}  key={e}/>)
        }
        )
         }
        </ScrollView>
      </View>
    </View>
  );
};

export default Fresh;
