import React, { useEffect, useRef, useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import axios from "axios";
import ADRESS_API from "../../Api";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import BottomSheet from "react-native-simple-bottom-sheet";
import ChangePassword from "./ChangePassword";
const Settings = ({ navigation }) => {
  const [newInformation, setnewInformation] = useState({
    name: "",
    dateOfBirth: "",
    password: "",
  });
  const [salesEnabled, setSalesEnabled] = useState(false);
  const [newArrivalsEnabled, setNewArrivalsEnabled] = useState(false);
  const [deliveryStatusEnabled, setDeliveryStatusEnabled] = useState(false);

  const handleSalesToggle = () =>
    setSalesEnabled((previousState) => !previousState);
  const handleNewArrivalsToggle = () =>
    setNewArrivalsEnabled((previousState) => !previousState);
  const handleDeliveryStatusToggle = () =>
    setDeliveryStatusEnabled((previousState) => !previousState);

  const handleInputChange = (field, value) => {
    setnewInformation({
      ...newInformation,
      [field]: value,
    });
  };
  const inputs = "w-fit h-16 pl-3 bg-[#f9f9f9] rounded-md shadow-sm mb-5";

  const [bsOpen, setBSOpen] = useState(false);
  const panelRef = useRef(null);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className=" bg-[rgba(249,249,249,1)] flex flex-col  mt-[10%] ml-4 ">
        <View className=" flex flex-col  ">
          <Text className="text-left text-[rgba(34,34,34,1)] text-[34px] font-bold tracking-[0] ">{`Settings`}</Text>
        </View>
        <Text className=" text-lg  font-semibold mt-5 mb-5">
          Personal Information
        </Text>
        <View>
          <TextInput
            className={inputs}
            placeholder={"Full name"}
            onChangeText={(query) => handleInputChange("name", query)}
            value={newInformation.name}
          />
          <TextInput
            className={inputs}
            placeholder={"Date of Birth"}
            onChangeText={(query) => handleInputChange("dateOfBirth", query)}
            value={newInformation.dateOfBirth}
            defaultValue="1989-12-12"
            type="date"
            keyboardType="numeric"
          />
        </View>
        <View className="flex flex-row items-center justify-between mt-5 mb-4">
          <Text className=" text-lg  font-semibold"> Password</Text>
          <TouchableOpacity onPress={() => setBSOpen(!bsOpen)}>
            <Text
              className="text-gray-500 mr-5 "
              onPress={() => navigation.navigate("ChangePassword")}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            editable={false}
            className={inputs}
            placeholder={"Password"}
            onChangeText={(query) => handleInputChange("password", query)}
            defaultValue="**********"
            secureTextEntry={true}
          />
        </View>
        <View className="flex flex-row items-center  mt-5 mb-4">
          <Text className=" text-lg font-semibold "> Notifications</Text>
        </View>
        <View className="flex flex-row items-center  justify-between">
          <Text className="text-lg">Sales</Text>
          <Switch
            className="mr-3"
            trackColor={{ false: "#767577", true: "#707324" }}
            thumbColor={salesEnabled ? "#707324" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleSalesToggle}
            value={salesEnabled}
          />
        </View>
        <View className="flex flex-row items-center  justify-between">
          <Text className="text-lg">New arrivals</Text>
          <Switch
            className="mr-3"
            trackColor={{ false: "#767577", true: "#707324" }}
            thumbColor={newArrivalsEnabled ? "#707324" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleNewArrivalsToggle}
            value={newArrivalsEnabled}
          />
        </View>
        <View className="flex flex-row items-center   justify-between">
          <Text className="text-lg">Delivery status changes</Text>
          <Switch
            className="mr-3"
            trackColor={{ false: "#767577", true: "#707324" }}
            thumbColor={deliveryStatusEnabled ? "#707324" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleDeliveryStatusToggle}
            value={deliveryStatusEnabled}
          />
        </View>
      </View>
      <BottomSheet
        isOpen={bsOpen}
        sliderMinHeight={0}
        ref={(ref) => (panelRef.current = ref)}
      >
        <View className="flex bg-[#fff] p-[16%]">
          <ChangePassword />
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

export default Settings;
