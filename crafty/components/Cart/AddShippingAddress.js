import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const AddShippingAddress = ({ navigation }) => {
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    postal: "",
    country: "Tunisia",
  });

  const handleInputChange = (field, value) => {
    setNewAddress({
      ...newAddress,
      [field]: value,
    });
  };

  const inputs = "w-fit h-16 pl-3 bg-[#f9f9f9] dark:bg-[#111111] dark:text-white rounded-md shadow-sm";
  return (
    <View className="w-fit h-screen gap-4">
      <TextInput
        className={inputs}
        placeholder={"Full name"}
        onChangeText={(query) => handleInputChange("name", query)}
        value={newAddress.name}
      />
      <TextInput
        className={inputs}
        placeholder={"Street"}
        onChangeText={(query) => handleInputChange("street", query)}
        value={newAddress.street}
      />
      <TextInput
        className={inputs}
        placeholder={"City"}
        onChangeText={(query) => handleInputChange("city", query)}
        value={newAddress.city}
      />
      <TextInput
        inputMode="numeric"
        className={inputs}
        placeholder={"Zip Code"}
        onChangeText={(query) => handleInputChange("postal", query)}
        value={newAddress.postal}
      />
      <View className="w-fit justify-between">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Checkout", {
              state: { address: newAddress },
            })
          }
          className="z-50 bg-[#BF9B7A] h-12 w-fit rounded-full justify-center items-center"
        >
          <Text className="text-center text-white text-sm font-medium leading-tight">
            SAVE ADDRESS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddShippingAddress;
