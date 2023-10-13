import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import axios from "axios"
const CodeConfirmation = ({ navigation ,route }) => {
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const inputs =
    "w-16 h-16 pl-5 pt-1 bg-white font-semibold text-4xl rounded-md";

    const data =route.params 
  const CodeConfirmationVerify = async ()=>{
     console.log(inputValues);
     const code = inputValues.join("")*1
     
     console.log("🚀 ~ file: CodeConfirmation.js:24 ~ CodeConfirmationVerify ~  email:",  data.data)
     
      const res = await axios.post("http://192.168.103.15:4000/reset/reset-password/verify",{email:data.data ,code})
      console.log("🚀 ~ file: CodeConfirmation.js:27 ~ CodeConfirmationVerify ~ res:", res.status)
      
     
      if(res.status===200){
      navigation.navigate("UpdatePassword",{data:data.data})
      }else{
        alert(res.data)
      }
     }

  
  const changeFocus = (index, text) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[f9f9f9] items-center w-screen h-screen">
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center"
        enabled
      >
        <View className="items-start">
          <TouchableWithoutFeedback className="gap-4" onPress={Keyboard.dismiss}>
            <Text className="font-bold text-4xl">Code Confirmation</Text>
            <Text className="">
              Please, enter the code you received via email.
            </Text>
            <View className="flex flex-row gap-4 left-5">
              {inputRefs.map((inputRef, index) => (
                <TextInput
                  key={index}
                  className={inputs}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={inputRef}
                  value={inputValues[index]}
                  onChangeText={(text) => changeFocus(index, text)}
                />
              ))}
            </View>
            <Text className="text-red-500 left-8 pb-4 opacity-0">
              Please make sure you entered the correct code.
            </Text>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            className="bg-[#BF9B7A] text-white w-96 h-12 justify-center rounded-full items-center"
            onPress={CodeConfirmationVerify}
          >
            <Text className="text-center text-white font-bold">Verify</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CodeConfirmation;
