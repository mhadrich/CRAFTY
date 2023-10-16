import {
  View,
  Text,
  ImageBackground,
  Pressable,
  KeyboardAvoidingView,
 
} from "react-native";
import React, { useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from "react-native-simple-bottom-sheet";
import AddCreditCard from "../../components/Cart/AddCreditCard";

const PaymentMethod = ({ navigation, route }) => {
  const [bsOpen, setBSOpen] = useState(false);
  const panelRef = useRef(null);
  const data = route.params;
  return (
    <View className="flex-1">
      <ScrollView>
        <View className="py-8 gap-4  mb-10 items-center">
          {data &&
            data.map((element, key) => {
              return (
                <Pressable
                  key={key}
                  className="shadow-lg"
                  onPress={() =>
                    navigation.navigate("Checkout", {
                      state: { card: element },
                    })
                  }
                >
                  <ImageBackground
                    className=" w-screen pt-14 h-64 scale-90 justify-center items-center"
                    source={
                      key % 2 === 0
                        ? require("../../assets/masterCard.png")
                        : require("../../assets/visaCard.png")
                    }
                  >
                    <Text className="text-white pb-12 text-3xl font-semibold leading-snug">
                      **** **** **** {element.cardNumber.slice(-4)}
                    </Text>
                    <View className="w-6/12 justify-between  flex flex-row">
                      <View className="justify-center items-center">
                        <Text className="opacity-80 text-white text-xs font-normal leading-snug">
                          Card Holder Name
                        </Text>
                        <Text className="text-center text-white text-sm font-semibold leading-snug">
                          {element.name}
                        </Text>
                      </View>
                      <View className=" justify-center items-center">
                        <Text className="opacity-80 text-white text-xs font-normal leading-snug">
                          Expiry Date
                        </Text>
                        <Text className="text-center text-white text-sm font-semibold leading-snug">
                          {element.expiryDate}
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </Pressable>
              );
            })}
          <View className="w-screen pt-2 px-10 items-end">
            <Pressable
              onPress={() => {
                setBSOpen(!bsOpen);
                panelRef.current.togglePanel();
              }}
              className="w-9 h-9 bg-black rounded-full shadow justify-center items-center"
            >
              <Text className="text-white scale-150">+</Text>
            </Pressable>
          </View>
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
            onClose={() => setBSOpen(false)}
            sliderMinHeight={0}
            ref={(ref) => (panelRef.current = ref)}
          >
            <AddCreditCard navigation={navigation} />
          </BottomSheet>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PaymentMethod;
