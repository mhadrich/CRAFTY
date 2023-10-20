import { View, Text, Pressable, KeyboardAvoidingView, useColorScheme } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import BottomSheet from "react-native-simple-bottom-sheet";
import AddShippingAddress from "../../components/Cart/AddShippingAddress";

const ShippingAddresses = ({ navigation, route }) => {
  const dark=useColorScheme();
  const [color,setColor]=useState('');
  console.log(color);
  useEffect(()=>{
    dark==="dark" ? setColor("#333333") : setColor("#ffffff")
  },[dark])
  const [bsOpen, setBSOpen] = useState(false);
  const data = route.params;
  const panelRef = useRef(null);
  return (
    <View className="flex-1 dark:bg-[#111111]">
      <View
        pointerEvents="none"
        className={
          bsOpen
            ? "bg-black w-screen h-screen absolute z-20 opacity-20 transition-all"
            : "bg-black w-screen h-screen absolute z-20 opacity-0 transition-all"
        }
      ></View>
      <ScrollView className="p-4 pt-6">
        {data &&
          data.map((element, key) => {
            return (
              <Pressable
                className="pb-6"
                key={key}
                onPress={() => {
                  navigation.navigate("Checkout", {
                    state: { address: element },
                  });
                }}
              >
                <View className="w-fit h-36 justify-between bg-white dark:bg-[#333333] p-6 rounded-lg shadow">
                  <View className="flex flex-row justify-between pb-2">
                    <Text className="text-sm font-medium dark:text-white leading-tight">
                      {element.name}
                    </Text>
                    <TouchableOpacity
                      onPress={() => console.log("picked edit")}
                    >
                      <Text className="text-[#8C633F] text-sm leading-tight">
                        Edit
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text className=" w-10/12 dark:text-white text-sm font-normal leading-tight">
                    {element.street}, {element.city} {element.postal},{"\n"}
                    {element.country}
                  </Text>
                  <View className=" w-fit justify-center items-center">
                    <Text className="text-xs dark:text-white font-normal leading-tight">
                      Use as shipping adress
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        <View className="w-fit items-end">
          <Pressable
            onPress={() => {
              setBSOpen(!bsOpen);
              panelRef.current.togglePanel();
            }}
            className="w-9 h-9 bg-black dark:bg-[#f9f9f9] rounded-full shadow justify-center items-center"
          >
            <Text className=" text-white dark:text-black scale-150">+</Text>
          </Pressable>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        className="z-50"
        keyboardVerticalOffset={0}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <View>
          <BottomSheet
            isOpen={bsOpen}
            wrapperStyle={{
              backgroundColor:`${color}`
            }}
            onClose={() => setBSOpen(false)}
            sliderMinHeight={0}
            ref={(ref) => (panelRef.current = ref)}
          >
            <AddShippingAddress navigation={navigation} />
          </BottomSheet>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ShippingAddresses;
