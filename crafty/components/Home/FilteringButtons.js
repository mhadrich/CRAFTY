import { Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

const FilteringButtons = ({ open, sort }) => {
  return (
    <TouchableOpacity onPress={()=>open(true)} className="flex flex-row justify-center items-center">
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z"
          fill="#222222"
        />
      </Svg>
      <Text className=" text-xs font-normal">{sort ? sort : "Select a sorting method"}</Text>
    </TouchableOpacity>
  );
};

export default FilteringButtons;
