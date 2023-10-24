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


const Checkout = ({ navigation, route }) => {
  
  const { authState  } = useAuth();
  const [addresses, setAddress] = useState([]);
  const [cardsList, setCards] = useState([]);

  
  const [defaultCard,setDefaultCard] = useState(  {
    name: "Jane Doe",
    cardNumber: "1234567812345678",
    expiryDate: "10/26",
    cvv: "123",
  });
  const [defaultAddress,setDefaultAddress] = useState( {
        name: "Jane Doe",
        street: "3 Newbridge Court Chino Hills",
        city: "CA",
        postal: "91709",
        country: "United States",
      });
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
  const GetCard =async ()=>{
    try {
    
   
      const response = await axios.get(`http://${ADRESS_API}:4000/payment/getAllByUserId/${authState.userId*1}` )
      
      console.log("🚀 ~ file: Checkout.js:82 ~ GetCard ~ response :", response .data)
      setCards(response.data)
      setDefaultCard(response.data[0])
    }
      
    catch (err) {
      console.log(err ,"err");
      }
  }
  useEffect(()=>{
    GetAdress()
    GetCard()
  },[])
  useEffect(() => {
    if (prms !== undefined) {
      if (prms.state) {
        if (prms.state.address) {
          setDefaultAddress(prms.state.address);
        } else if (prms.state.card) {
          setDefaultCard(prms.state.card);
        }
      }
    }
  }, [prms]);
  return (
    <View className="dark:bg-[#111111] h-screen p-4 pt-6">
      <ChkShipAdrs
        navigation={navigation}
        data={addresses}
        render = {defaultAddress}
      />
      <ChkPymnt
        navigation={navigation}
        data={cardsList}
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
