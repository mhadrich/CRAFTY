import { View, useColorScheme } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CategoryPill from "../components/Home/CategoryPill";
import FilteringButtons from "../components/Home/FilteringButtons";
import { ScrollView } from "react-native-gesture-handler";
import ProdCard from "../components/ProdCard";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import BottomSheet from "react-native-simple-bottom-sheet";

const AllProd = ({ navigation }) => {
  const dark=useColorScheme();
  const [color,setColor]=useState('');
  useEffect(()=>{
    dark==="dark" ? setColor("#333333") : setColor("#ffffff")
  },[dark])
  const [sliderStart, setSliderStart] = useState(0);
  const [sort, setSort] = useState(null);
  const panelRef = useRef(null);
  const [bsOpen, setBSOpen] = useState(false);
  console.log(sort);
  const SORTING =
    "Popular,Newest,Customer Review,Price: low to high,Price:high to low".split(
      ","
    );
  const categories = [
    "Decor",
    "Kitchen",
    "Rugs",
    "Bathroom",
    "Garden",
    "Living",
  ];
  return (
    <View>
      <View className="justify-center items-center">
        <View className="bg-white dark:bg-black w-screen h-24 py-3 items-center justify-start">
          <CategoryPill category={categories} />
          <FilteringButtons open={setBSOpen} sort={sort} />
        </View>
        <ScrollView
          className=" dark:bg-[#111111] w-screen pl-7 pt-9 "
          showsVerticalScrollIndicator={false}
        >
          <View className="flex flex-row">
            <ProdCard navigation={navigation} />
            <View className="p-4" />
            <ProdCard navigation={navigation} />
          </View>
          <View className="flex flex-row">
            <ProdCard navigation={navigation} />
            <View className="p-4" />
            <ProdCard navigation={navigation} />
          </View>
          <View className="flex flex-row">
            <ProdCard navigation={navigation} />
            <View className="p-4" />
            <ProdCard navigation={navigation} />
          </View>
          <View className="flex flex-row">
            <ProdCard navigation={navigation} />
            <View className="p-4" />
            <ProdCard navigation={navigation} />
          </View>
          <View className="flex flex-row">
            <ProdCard navigation={navigation} />
            <View className="p-4" />
            <ProdCard navigation={navigation} />
          </View>
        </ScrollView>
      </View>
      {bsOpen && (
        <BottomSheet
          className="justify-center items-center"
          wrapperStyle={{
            backgroundColor:`${color}`
          }}
          isOpen={true}
          onClose={() => setBSOpen(false)}
          sliderMinHeight={0}
          sliderMaxHeight={1000}
          ref={(ref) => (panelRef.current = ref)}
        >
          <View className="h-96">
            <WheelPickerExpo
              height={300}
              backgroundColor={`${color}`}
              width={"%100"}
              initialSelectedIndex={sliderStart}
              items={SORTING.map((name) => ({ label: name, value: "" }))}
              onChange={({ index, item }) => {
                setSliderStart(index);
                setSort(item.label);
              }}
            />
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

export default AllProd;
