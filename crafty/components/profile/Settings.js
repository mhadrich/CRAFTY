import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import BottomSheet from "react-native-simple-bottom-sheet";
import ChangePassword from "./ChangePassword";
const Settings = ({ navigation, route }) => {
  const { data } = route.params;
  const dark = useColorScheme();
  const [color, setColor] = useState("");
  useEffect(() => {
    dark === "dark" ? setColor("#333333") : setColor("#ffffff");
  }, [dark]);

  const [salesEnabled, setSalesEnabled] = useState(false);
  const [newArrivalsEnabled, setNewArrivalsEnabled] = useState(false);
  const [deliveryStatusEnabled, setDeliveryStatusEnabled] = useState(false);

  const handleSalesToggle = () =>
    setSalesEnabled((previousState) => !previousState);
  const handleNewArrivalsToggle = () =>
    setNewArrivalsEnabled((previousState) => !previousState);
  const handleDeliveryStatusToggle = () =>
    setDeliveryStatusEnabled((previousState) => !previousState);

  const inputs =
    "w-96 h-16 pl-3 bg-[#f9f9f9] dark:bg-[#333333] dark:text-white rounded-md shadow-sm mb-5";

  const [bsOpen, setBSOpen] = useState(false);
  const panelRef = useRef(null);
  return (
    <View className=" w-screen h-screen dark:bg-[#111111] items-center">
      <View
        pointerEvents="none"
        className={
          bsOpen
            ? "bg-black w-screen h-screen absolute z-20 opacity-20 transition-all"
            : "bg-black w-screen h-screen absolute z-20 opacity-0 transition-all"
        }
      ></View>
      <View className=" bg-[rgba(249,249,249,1)] flex flex-col  mt-[7%]">
        <View className=" flex flex-col  ">
          <Text className="text-left text-[rgba(34,34,34,1)] text-[34px] font-bold tracking-[0] dark:text-white">{`Settings`}</Text>
        </View>
        <Text className=" text-lg  font-semibold mt-5 mb-5 dark:text-white">
          Personal Information
        </Text>
        <View>
          <TextInput
            editable={false}
            className={inputs}
            placeholder={"Full name"}
            value={data.name}
          />
          <TextInput
            editable={false}
            className={inputs}
            placeholder={"16-07-2003"}
            value={data.dateOfBirth}
            type="date"
            keyboardType="numeric"
          />
        </View>
        <View className="flex flex-row items-center justify-between mt-5 mb-4">
          <Text className=" text-lg  font-semibold dark:text-white">
            {"Password "}
          </Text>
          <TouchableOpacity onPress={() => setBSOpen(!bsOpen)}>
            <Text
              className="text-gray-500 mr-2"
              onPress={() => {
                setBSOpen(true);
              }}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            editable={false}
            className={inputs}
            placeholder={"********"}
            secureTextEntry={true}
          />
        </View>
        <View className="flex flex-row items-center  mt-5 mb-4">
          <Text className=" text-lg font-semibold dark:text-white ">
            {" Notifications"}
          </Text>
        </View>
        <View className="gap-4">
          <View className="flex flex-row items-center  justify-between">
            <Text className="text-lg dark:text-white">Sales</Text>
            <Switch
              className="mr-3"
              trackColor={{ false: "#c1c1c1", true: "#707324" }}
              thumbColor={salesEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor={dark === "light" ? "#f9f9f9" : "#333333"}
              onValueChange={handleSalesToggle}
              value={salesEnabled}
            />
          </View>
          <View className="flex flex-row items-center  justify-between">
            <Text className="text-lg dark:text-white">New arrivals</Text>
            <Switch
              className="mr-3"
              trackColor={{ false: "#c1c1c1", true: "#707324" }}
              thumbColor={newArrivalsEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor={dark === "light" ? "#f9f9f9" : "#333333"}
              onValueChange={handleNewArrivalsToggle}
              value={newArrivalsEnabled}
            />
          </View>
          <View className="flex flex-row items-center   justify-between">
            <Text className="text-lg dark:text-white">
              Delivery status changes
            </Text>
            <Switch
              className="mr-3"
              trackColor={{ false: "#c1c1c1", true: "#707324" }}
              thumbColor={deliveryStatusEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor={dark === "light" ? "#f9f9f9" : "#333333"}
              onValueChange={handleDeliveryStatusToggle}
              value={deliveryStatusEnabled}
            />
          </View>
        </View>
      </View>
      {bsOpen && (
        <View className="-bottom-[10%]  z-50 w-screen">
          <BottomSheet
            isOpen={true}
            wrapperStyle={{
              backgroundColor: `${color}`,
            }}
            onClose={() => setBSOpen(false)}
            sliderMinHeight={0}
            sliderMaxHeight={1500}
            ref={(ref) => (panelRef.current = ref)}
          >
            <ChangePassword navigation={navigation} data={data} />
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

export default Settings;
