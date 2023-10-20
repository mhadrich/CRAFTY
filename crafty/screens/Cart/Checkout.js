import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ChkShipAdrs from "../../components/Cart/ChkShipAdrs";
import ChkPymnt from "../../components/Cart/ChkPymnt";
import ChkDelivery from "../../components/Cart/ChkDelivery";
import ChkAmount from "../../components/Cart/ChkAmount";
import { TouchableOpacity } from "react-native-gesture-handler";

const address = [
  {
    name: "Jane Doe",
    street: "3 Newbridge Court Chino Hills",
    city: "CA",
    postal: "91709",
    country: "United States",
  },
  {
    name: "Jhon Doe",
    street: "51 Riverside Chino Hills",
    city: "CA",
    postal: "91709",
    country: "United States",
  },
  {
    name: "M H",
    street: "34 Chem's Street",
    city: "Tunis",
    postal: "1002",
    country: "Tunisia",
  },
];
const cards = [
  {
    name: "Jane Doe",
    cardNumber: "1234567812345678",
    expiryDate: "10/26",
    cvv: "123",
  },
  {
    name: "Jhon Doe",
    cardNumber: "5678123456781231",
    expiryDate: "10/28",
    cvv: "456",
  },  
];

const Checkout = ({ navigation, route }) => {
  const [defaultCard,setDefaultCard] = useState(cards[0]);
  const [defaultAddress,setDefaultAddress] = useState(address[0]);
  const [deliveryPrice, setDeliveryPrice] = useState(5);
  const prms= route.params
  useEffect(()=>{
    if(prms!==undefined){
      if(prms.state.address){
        setDefaultAddress(prms.state.address)
      } else if(prms.state.card){
        setDefaultCard(prms.state.card)
      }
    }
  },[prms])
  return (
    <View className="dark:bg-[#111111] p-4 pt-6">
      <ChkShipAdrs
        navigation={navigation}
        data={address}
        render = {defaultAddress}
      />
      <ChkPymnt
        navigation={navigation}
        data={cards}
        render={defaultCard.cardNumber}
      />
      <ChkDelivery fn={setDeliveryPrice} />
      <ChkAmount delivery={deliveryPrice} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Success")}
        className="mt-6 bg-[#BF9B7A] h-12 w-fit rounded-full justify-center items-center"
      >
        <Text className="text-center text-white text-sm font-medium leading-tight">
          CONFIRM ORDER
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
