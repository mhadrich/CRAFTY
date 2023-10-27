import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import ADRESS_API from "../../Api";
const UpdatePassword = ({ navigation ,route}) => {
  const Passwoerd_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const inputs = "mb-4 w-96 h-16 pl-3 bg-white rounded-md dark:bg-[#333333] dark:text-white";
  const inputsError = "mb-4 w-96 h-16 pl-3 bg-white rounded-md border border-red-500 dark:bg-[#333333] dark:text-white"
  const {
    control,
    handleSubmit,
    formState: { errors },watch   
  } = useForm();
  const params =route.params
  const NewPassword =watch("New password")
  const UpdatePass = async(data) => {
    console.log("🚀 ~ file: UpdatePassword.js:25 ~ UpdatePass ~ data:", NewPassword)
    console.log(params)
    try{
    const res = await axios.put (`http://${ADRESS_API}:4000/reset/reset-password`,{email:params.data,password:NewPassword})
    console.log("🚀 ~ file: ForgetPassword.js:9 ~ sendEmail ~ res.satuts:", res.data)
  
    if(res.status===200){
    navigation.navigate("Login")
    }else{
      alert(res.data)
    }}
    catch (err) {
      console.error('Error:', err);
      }
  }
  
   
  
    
  
  return (
    <SafeAreaView className="flex-1 bg-[f9f9f9] dark:bg-[#111111] items-center w-screen h-screen">
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center"
        enabled
      >
        
          <View className=" items-end justify-center">
            <View>
              <Text className="font-bold text-4xl mb-20  dark:text-white">Update Password</Text>
              <Text className="mb-3 dark:text-white"> Please update your password.</Text>
              <Controller
                control={control}
                name="New password"
                rules={{
                  required:  "password  is required" ,
                   pattern: { value: Passwoerd_regex, message: "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long." }
                }}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (<><TextInput value={value} onChangeText={onChange} onBlur={onBlur} className={error ?inputsError :inputs} placeholder="New password" secureTextEntry />
                {error &&<Text className="text-red-500">{error.message}</Text>}</> )} />
                 <Controller
                control={control}
                name="Confirm Password"
                rules={{
                  required:  "password Confirmation is required" ,
                  validate : (value)=>{ return (value  === NewPassword||"password do not match !!!")}
                }}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (<><TextInput value={value} onChangeText={onChange} onBlur={onBlur} className={error ?inputsError :inputs} placeholder="Confirm Password" secureTextEntry />
              {error &&<Text className="text-red-500">{error.message}</Text>}</> )} />
              
            </View>

            <TouchableOpacity
              className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-14 rounded-full items-center justify-center"
              onPress={handleSubmit(UpdatePass)}
            >
              <Text className="text-center text-white font-bold">Update</Text>
            </TouchableOpacity>
          </View>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UpdatePassword;
