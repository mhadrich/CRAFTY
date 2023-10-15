import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Svg, Path } from "react-native-svg";

const CartItem = (props) => {
  const { total } = props;
  const [panel, setPanel] = useState(false);
  const [panelStyle, setPanelStyle] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(30);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(unitPrice * quantity);
  }, [quantity]);
  useEffect(() => {
    if(panel){
      setPanelStyle("absolute right-11 top-2 h-24 w-44 items-center justify-between p-4 bg-white z-20 rounded-lg shadow")
    } else {
      setPanelStyle("absolute right-11 top-2 h-24 w-44 items-center justify-between p-4 bg-white z-20 rounded-lg shadow hidden")
    }
  }, [panel]);
  return (
    <View className="flex flex-row pb-4">
      <View className={panelStyle}>
        <Text className="text-xs px-3 opacity-70">Add to favorites</Text>
        <View className="border-t border-black w-40 opacity-10"></View>
        <Text className="text-xs opacity-70">Delete from the list</Text>
      </View>
      <Image
        className="w-24 h-24 rounded-l-lg"
        src="https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg"
      />
      <View className="bg-white w-9/12 h-24 rounded-r-lg p-4">
        <View className="flex flex-row h-6 justify-between">
          <Text className="text-base font-semibold">Wood Map</Text>
          <Pressable onPress={()=>setPanel(!panel)} className="bottom-1 left-2">
            <Svg
              width="40"
              height="40"
              viewBox="0 0 40 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                opacity="0.54"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 16C21.1 16 22 15.1 22 14C22 12.9 21.1 12 20 12C18.9 12 18 12.9 18 14C18 15.1 18.9 16 20 16ZM20 18C18.9 18 18 18.9 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18ZM20 24C18.9 24 18 24.9 18 26C18 27.1 18.9 28 20 28C21.1 28 22 27.1 22 26C22 24.9 21.1 24 20 24Z"
                fill="#9B9B9B"
              />
            </Svg>
          </Pressable>
        </View>
        <View className=" flex flex-row justify-between items-center mt-2">
          <View className=" flex flex-row">
            <Pressable
              onPress={() => {
                setQuantity(quantity - 1);
                total(totalPrice);
              }}
              className="w-9 h-9 bg-white rounded-full shadow justify-center items-center"
            >
              <Text className=" scale-150 opacity-50">-</Text>
            </Pressable>
            <View className="w-12 justify-center items-center">
              <Text className="opacity-50">{quantity}</Text>
            </View>
            <Pressable
              onPress={() => {
                setQuantity(quantity + 1);
                total(totalPrice);
              }}
              className="w-9 h-9 bg-white rounded-full shadow justify-center items-center"
            >
              <Text className=" scale-150 opacity-50">+</Text>
            </Pressable>
          </View>
          <View className="pr-2">
            <Text className="text-right  z-0 text-sm font-medium leading-tight">
              {totalPrice}$
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
