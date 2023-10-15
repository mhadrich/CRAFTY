import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const CategoryPill = (props) => {
  const { category } = props;
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className=" flex flex-row p-2 gap-2"
    >
      {category &&
        category.map((element,i) => {
          return (
            <TouchableOpacity key={i}
              onPress={() => console.log(element)}
              className="bg-[#F2E0C9] items-center justify-center w-24 h-7 rounded-3xl"
            >
              <Text className=" text-black text-sm font-normal leading-tight">
                {element}
              </Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

export default CategoryPill;
