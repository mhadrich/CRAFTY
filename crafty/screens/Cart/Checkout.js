import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ChkShipAdrs from "../../components/Cart/ChkShipAdrs";
import ChkPymnt from "../../components/Cart/ChkPymnt";
import ChkDelivery from "../../components/Cart/ChkDelivery";
import ChkAmount from "../../components/Cart/ChkAmount";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import ADRESS_API from "../../Api"
import { useAuth } from "../../components/Authprovider/Authprovider.js";

// const address = [
//   {
//     name: "Jane Doe",
//     street: "3 Newbridge Court Chino Hills",
//     city: "CA",
//     postal: "91709",
//     country: "United States",
//   },
//   {
//     name: "Jhon Doe",
//     street: "51 Riverside Chino Hills",
//     city: "CA",
//     postal: "91709",
//     country: "United States",
//   },
//   {
//     name: "M H",
//     street: "34 Chem's Street",
//     city: "Tunis",
//     postal: "1002",
//     country: "Tunisia",
//   },
// ];

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
  
  const { authState  } = useAuth();
  const [addresses, setAddress] = useState([]);
  const [cardsList, setCards] = useState([]);

  
  const [defaultCard,setDefaultCard] = useState(cards[0]);
  const [defaultAddress,setDefaultAddress] = useState({});
  const [deliveryPrice, setDeliveryPrice] = useState(5);
  const prms= route.params
  const GetAdress =async ()=>{
    try {
    
   
      const response = await axios.get(`http://${ADRESS_API}:4000/adress/getadressByUserId/${authState.userId*1}` )
      console.log("🚀 ~ file: MyBag.js:27 ~ GetAD ~ response:", response.data)
      setAddress(response.data)
      setDefaultAddress(response.data[0])
    }
      
    catch (err) {
      console.log(err ,"err");
      }
  }
  useEffect(()=>{
    GetAdress()
  },[])
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
    <View className="dark:bg-[#111111] h-screen p-4 pt-6">
      <ChkShipAdrs
        navigation={navigation}
        data={addresses}
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
