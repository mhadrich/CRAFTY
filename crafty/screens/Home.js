import Fresh from "../components/Home/Fresh";
import { View } from "react-native";
import React,{useEffect,useState} from "react";
import Karousel from "../components/Home/Carousel";
import { ScrollView } from "react-native-gesture-handler";
import Recent from "../components/Home/Recent";
import Articles from "../components/Home/Articles";
import TabNav from "../components/TabNav/TabNav";
import axios from "axios"
import ADRESS_API from "../Api"
const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://${ADRESS_API}:4000/article/getarticles`)
      .then((response) => {
        console.log("🚀 ~ file: Articles.js:14 ~ useEffect ~ response.data👍:", response.data)
        return setData(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View className=" dark:bg-[#111111] justify-between items-center">
      <TabNav navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Karousel data={data} />
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