import React, { useState } from "react";
import axios from "axios"
  import ADRESS_API from "../../Api";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgetPassword({ navigation }) {
  const inputs = "w-96 px-4 h-16 bg-white rounded-md";
   const [email,setemail] = useState()
   const sendEmail = async()=> {
    try{
          const res = await axios.post(`http:/${ADRESS_API}:4000/reset/reset-password/send`,{email:email})
        console.log("🚀 ~ file: ForgetPassword.js:9 ~ sendEmail ~ res.satuts:", res.data)
      
        if(res.status===200){
        navigation.navigate("CodeConfirmation",{ data: email })
        }else{
          alert(res.data)
        }}
        catch (err) {
          console.error('Error:', err);
          }}
        
   

  return (
    <SafeAreaView className="flex-1 bg-[f9f9f9]  ">
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center"
        enabled
      >
        <View className="-top-8  items-start px-4 justify-center">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Text className="font-bold text-4xl mb-20 ">Forgot Password</Text>
            <View className="flex flex-row mb-4 ml-2">
              <Text>
                Please, enter your email address. We will send you a
                verification code.
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TextInput
            inputMode="email"
            autoCapitalize="none"
            className={inputs}
            placeholder="Email"
            onChangeText={(e) => {
              setemail(e);
            }}
          />
          <TouchableOpacity
            className="bg-[#BF9B7A] justify-center text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
            onPress={sendEmail}
          >
            <Text className="text-center text-white font-bold">Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
