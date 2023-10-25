import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import ADRESS_API from "../../Api"
import { useAuth } from "../Authprovider/Authprovider";

const AddCreditCard = ({ navigation }) => {


  const { authState }=useAuth()
  const AdCard =async ()=>{
    try {
    
     
     console.log(authState.userId,"newadress")
      const response = await axios.post(`http://${ADRESS_API}:4000/payment/addPayment`,
        {
          
          userId:authState.userId*1,
          name :newCard.name,
          cardNumber:newCard.cardNumber,
          expiryDate:newCard.expiryDate,
          cvv:newCard.cvv
        }
       )
       
       console.log("🚀 ~ file: AddCreditCard.js:26 ~ AdCard ~ response:", response)
    
    }
      
    catch (err) {
      console.log(err.message ,"err");
      }
  }
  const [newCard, setNewCard] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const handleInputChange = (field, value) => {
    setNewCard({
      ...newCard,
      [field]: value,
    });
  };

  const inputs = "w-fit h-16 pl-3 bg-[#f9f9f9] dark:bg-[#111111] dark:text-white rounded-md shadow-sm";
  return (
    <View className="w-fit h-screen gap-4">
      <TextInput
        className={inputs}
        placeholder={"Name on card"}
        onChangeText={(query) => handleInputChange("name", query)}
        value={newCard.name}
      />
      <TextInput
        inputMode="numeric"
        className={inputs}
        placeholder={"Card Number"}
        onChangeText={(query) => handleInputChange("cardNumber", query)}
        value={newCard.cardNumber}
      />
      <TextInput
        className={inputs}
        placeholder={"Expiry Date"}
        onChangeText={(query) => handleInputChange("expiryDate", query)}
        value={newCard.expiryDate}
      />
      <TextInput
        inputMode="numeric"
        className={inputs}
        placeholder={"CVV"}
        onChangeText={(query) => handleInputChange("cvv", query)}
        value={newCard.cvv}
      />
      <View className="w-fit justify-between">
        <TouchableOpacity
          onPress={() =>{
            AdCard()
            navigation.navigate("Checkout", {
              state: { card: newCard },
            })}
          }
          className="z-50 bg-[#BF9B7A] h-12 w-fit rounded-full justify-center items-center"
        >
          <Text className="text-center text-white text-sm font-medium leading-tight">
            ADD CARD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCreditCard;
