import { View, Text, useColorScheme } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CategoryPill from "../components/Home/CategoryPill";
import FilteringButtons from "../components/Home/FilteringButtons";
import { ScrollView } from "react-native-gesture-handler";
import ArticleCard from "../components/ArticleCard";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import BottomSheet from "react-native-simple-bottom-sheet";

const AllArticles = ({ navigation, route }) => {
  const { data } = route.params;
  const dark = useColorScheme();
  const [color, setColor] = useState("");
  useEffect(() => {
    dark === "dark" ? setColor("#333333") : setColor("#ffffff");
  }, [dark]);
  const [sliderStart, setSliderStart] = useState(0);
  const [sort, setSort] = useState(null);
  const panelRef = useRef(null);
  const [bsOpen, setBSOpen] = useState(false);
  const SORTING = "Popular,Newest,Customer Review".split(",");
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
          className="w-screen h-screen dark:bg-[#111111]"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex flex-row justify-center">
            <View>
              {data &&
                data.map((article, key) => {
                  if (key % 2 === 0) {
                    return (
                      <ArticleCard
                        navigation={navigation}
                        article={article}
                        key={key}
                      />
                    );
                  }
                })}
            </View>
            <View>
              {data &&
                data.map((article, key) => {
                  if (key % 2 !== 0) {
                    return (
                      <ArticleCard
                        navigation={navigation}
                        article={article}
                        key={key}
                      />
                    );
                  }
                })}
            </View>
          </View>
        </ScrollView>
      </View>
      {bsOpen && (
        <BottomSheet
          className="justify-center items-center"
          wrapperStyle={{
            backgroundColor: `${color}`,
          }}
          isOpen={true}
          onClose={() => setBSOpen(false)}
          sliderMinHeight={0}
          sliderMaxHeight={1000}
          ref={(ref) => (panelRef.current = ref)}
        >
          <View className="h-96">
            <WheelPickerExpo
              backgroundColor={`${color}`}
              height={300}
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

export default AllArticles;
