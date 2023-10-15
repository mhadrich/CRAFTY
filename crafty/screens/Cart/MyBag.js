import { View, Text, Pressable, Keyboard } from "react-native";
import React, { useRef, useState } from "react";
import CartItem from "../../components/Cart/CartItem";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const MyBag = ({ navigation }) => {
  const [cartTotal, setCartTotal] = useState(90);
  const scrollViewRef = useRef();
  return (
    <SafeAreaView className="w-screen h-screen p-4 ">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text className="text-4xl pb-6 font-bold">My Bag</Text>
        <ScrollView
          className="max-h-80"
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
        >
          <CartItem total={setCartTotal} current={cartTotal} />
          <CartItem />
        </ScrollView>
      </TouchableWithoutFeedback>
      <View className="pb-20">
        <View className="mt-6 flex flex-row items-center justify-between">
          <TextInput
            onFocus={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
            className="pl-4 w-full h-9 bg-white rounded-lg  shadow"
            placeholder={"Enter your promo code"}
          />
          <Pressable
            onPress={Keyboard.dismiss}
            className=" right-9 w-9 h-9 bg-black rounded-full items-center justify-center"
          >
            <Svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0L4.95 1.05L9.15 5.25H0V6.75H9.15L4.95 10.95L6 12L12 6L6 0Z"
                fill="white"
              />
            </Svg>
          </Pressable>
        </View>
        <View className="flex flex-row pt-6 items-center justify-between">
          <Text className="opacity-50 text-sm font-medium leading-tight">
            Total amount:
          </Text>
          <Text className="text-right text-lg font-semibold leading-snug">
            {cartTotal}$
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Checkout")}
          className="mt-6 bg-[#BF9B7A] h-12 w-fit rounded-full justify-center items-center"
        >
          <Text className="text-center text-white text-sm font-medium leading-tight">
            CHECK OUT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyBag;
