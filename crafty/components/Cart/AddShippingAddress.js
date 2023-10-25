import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import ADRESS_API from "../../Api"
import { useAuth } from "../Authprovider/Authprovider";
const AddShippingAddress = ({ navigation }) => {
  const { authState }=useAuth()
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    postal: "",
    country: "Tunisia",
  });
  const AdAdress =async ()=>{
    try {
    
     console.log(newAddress,"newadress")
     
     console.log(authState.userId,"newadress")
      const response = await axios.post(`http://${ADRESS_API}:4000/adress/addadress`,{
        street: newAddress.street ,
        city:newAddress.city,
        postalCode:newAddress.postal*1,
        userId:authState.userId*1
      } )
      console.log("🚀 ~ file: MyBag.js:27 ~ GetAD ~ response:", response.data)
    
    }
      
    catch (err) {
      console.log(err.message ,"err");
      }
  }

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
          onPress={() =>{
          AdAdress()
            navigation.navigate("Checkout", {
              state: { address: newAddress },
            })}
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
