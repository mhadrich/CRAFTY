import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { useAuth } from "../Authprovider/Authprovider";
import axios from "axios";
import ADRESS_API from "../../Api";

export default MyOrders = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState("Delivered");
  const { authState } = useAuth();
  const { userId } = authState;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userOrders = await axios.get(
          `${ADRESS_API}:4000/order/getorderbyuserId/${userId}`
        );
        setOrders(userOrders.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  // const dummyData = [
  //   {
  //     id: 1,
  //     deliveredProcessing: "Delivered",
  //     dateOfDelivery: "2023-10-10",
  //     trackingNumber: "IW3475453455",
  //     quantity: 3,
  //     items: [{ price: 120 }, { name: "Makah" }],
  //   },
  //   {
  //     id: 2,
  //     deliveredProcessing: "Processing",
  //     dateOfDelivery: "2023-10-12",
  //     trackingNumber: "IW3475453456",
  //     quantity: 2,
  //     items: [{ price: 80 }, { name: "Makah" }],
  //   },
  //   {
  //     id: 3,
  //     deliveredProcessing: "Cancelled",
  //     dateOfDelivery: "2023-10-15",
  //     trackingNumber: "IW3475453457",
  //     quantity: 1,
  //     items: [{ price: 10 }, { name: "Makah" }],
  //   },
  //   {
  //     id: 4,
  //     deliveredProcessing: "Delivered",
  //     dateOfDelivery: "2023-10-15",
  //     trackingNumber: "IW3475453457",
  //     quantity: 1,
  //     items: [{ price: 50 }, { name: "Makah" }],
  //   },
  // ];
  // useEffect(() => {
  //   setOrders(dummyData);
  // }, []);
  const delivredOrders = orders.filter((e) => {
    return e.deliveredProcessing === "Delivered";
  });
  const processingOrders = orders.filter((e) => {
    return e.deliveredProcessing === "Processing";
  });
  const cancelledOrders = orders.filter((e) => {
    return e.deliveredProcessing === "Cancelled";
  });
  
  return (
    <View className=" dark:bg-[#111111] w-screen h-screen items-center">
      <View className="flex flex-col  mt-[10%] w-11/12 items-start ">
        <View className=" flex flex-col">
          <Text className="text-left text-[34px] font-bold dark:text-white">{`My Orders`}</Text>
        </View>
        {/* buttons */}
        <View className="flex flex-row items-center p-5 justify-center">
          <TouchableOpacity onPress={() => setActiveButton("Delivered")}>
            <View
              className={`p-3 pl-7 pr-7 rounded-full ${
                activeButton === "Delivered"
                  ? "bg-black dark:bg-[#f9f9f9] "
                  : "bg-transparent"
              }`}
            >
              <Text
                className={`flex flex-col text-center  text-base font-medium ${
                  activeButton === "Delivered"
                    ? " text-white dark:text-black"
                    : " text-black dark:text-white"
                }`}
              >{`Delivered`}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveButton("Processing")}>
            <View
              className={`p-3 pl-7 pr-7 rounded-full ${
                activeButton === "Processing"
                  ? "bg-black dark:bg-[#f9f9f9] "
                  : "bg-transparent"
              }`}
            >
              <Text
                className={`flex flex-col text-center  text-base font-medium ${
                  activeButton === "Processing"
                    ? " text-white dark:text-black"
                    : " text-black dark:text-white"
                }`}
              >{`Processing`}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveButton("Cancelled")}>
            <View
              className={`p-3 pl-7 pr-7 rounded-full ${
                activeButton === "Cancelled"
                  ? "bg-black dark:bg-[#f9f9f9] "
                  : "bg-transparent"
              }`}
            >
              <Text
                className={`flex flex-col text-center  text-base font-medium ${
                  activeButton === "Cancelled"
                    ? " text-white dark:text-black"
                    : " text-black dark:text-white"
                }`}
              >{`Cancelled`}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex justify-between items-center mb-5">
          <Text className="text-lg font-semibold dark:text-white">{`Details`}</Text>
        </View>
        {/* delivered container */}
        <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
          {activeButton === "Delivered" &&
            delivredOrders.map((e) => {
              return (
                <View className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#333333] dark:border-[#c1c1c1] mt-2">
                  <View className=" flex flex-row items-center justify-between ">
                    <Text className="text-sm font-semibold dark:text-white ">
                      Order № {`1947034` && e.id}
                    </Text>
                    <Text className="text-gray-400 mt-2">
                      {`05-12-2019` && e.dateOfDelivery}
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row items-center">
                    <Text className="dark:text-white">{`Tracking number : `}</Text>
                    <Text className="font-semibold dark:text-white">
                      {`  IW3475453455` && e.trackingNumber}
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center">
                      <Text className="flex justify-between dark:text-white">{`Quantity :`}</Text>
                      <Text className="text-gray-400 ml-1">
                        {`3` && e.quantity}
                      </Text>
                    </View>
                    <View className="flex flex-row items-center">
                      <Text className="dark:text-white">{`Total Amount:`}</Text>
                      <Text className="font-semibold dark:text-white ml-1">
                        {`112$` && e.items.price * e.quantity}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    className="mt-5 flex flex-row items-center justify-between "
                    onPress={() =>
                      navigation.navigate("OrderDetails", { data: e })
                    }
                  >
                    <View className="p-3 pl-7 pr-7 mr-5 border border-black dark:border-white rounded-full">
                      <Text className="text-center text-base font-medium dark:text-white">
                        Details
                      </Text>
                    </View>
                    <Text className="text-[#707324] text-lg">Delivered</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          {/* Processing container */}
          {activeButton === "Processing" &&
            processingOrders.map((e) => {
              return (
                <View className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#333333] dark:border-[#c1c1c1] mt-2">
                  <View className=" flex flex-row items-center justify-between ">
                    <Text className="text-sm font-semibold dark:text-white">
                      Order № {`1947034` && e.id}
                    </Text>
                    <Text className="text-gray-400 mt-2">
                      {`05-12-2019` && e.dateOfDelivery}
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row items-center">
                    <Text className="dark:text-white">{`Tracking number : `}</Text>
                    <Text className="font-semibold dark:text-white">
                      {`  IW3475453455` && e.trackingNumber}
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center">
                      <Text className="flex justify-between dark:text-white">{`Quantity :`}</Text>
                      <Text className="text-gray-400 ml-1">
                        {`  3` && e.quantity}
                      </Text>
                    </View>
                    <View className="flex flex-row items-center">
                      <Text className="dark:text-white">{`Total Amount:`}</Text>
                      <Text className="font-semibold dark:text-white ml-1">
                        {`112$` && e.items.price * e.quantity}
                      </Text>
                    </View>
                  </View>

                  <View className=""></View>

                  <TouchableOpacity
                    className="  hover:underline mt-5 flex flex-row items-center justify-between "
                    onPress={() =>
                      navigation.navigate("OrderDetails", { data: e })
                    }
                  >
                    <View className="p-3 pl-7 pr-7 mr-5 border border-black dark:border-white rounded-full">
                      <Text className="text-center text-base font-medium dark:text-white">
                        Details
                      </Text>
                    </View>
                    <Text className="text-blue-500 text-lg">Processing</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          {/* Cancelled container */}
          {activeButton === "Cancelled" &&
            cancelledOrders.map((e) => {
              return (
                <View className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#333333] dark:border-[#c1c1c1] mt-2">
                  <View className=" flex flex-row items-center justify-between ">
                    <Text className="text-sm font-semibold dark:text-white">
                      Order № {`1947034` && e.id}
                    </Text>
                    <Text className="text-gray-400 mt-2">
                      {`05-12-2019` && e.dateOfDelivery}
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row items-center">
                    <Text className="dark:text-white">{`Tracking number : `}</Text>
                    <Text className="font-semibold dark:text-white">
                      {`  IW3475453455` && e.trackingNumber}
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center">
                      <Text className="flex justify-between dark:text-white">{`Quantity :`}</Text>
                      <Text className="text-gray-400 ml-1">
                        {`  3` && e.quantity}
                      </Text>
                    </View>
                    <View className="flex flex-row items-center">
                      <Text className="dark:text-white">{`Total Amount:`}</Text>
                      <Text className="font-semibold dark:text-white ml-1">
                        {`112$` && e.items.price * e.quantity}
                      </Text>
                    </View>
                  </View>

                  <View className=""></View>

                  <TouchableOpacity
                    className="  hover:underline mt-5 flex flex-row items-center justify-between "
                    onPress={() =>
                      navigation.navigate("OrderDetails", { data: e })
                    }
                  >
                    <View className="p-3 pl-7 pr-7 mr-5 border border-black dark:border-white rounded-full">
                      <Text className="text-center text-base font-medium dark:text-white">
                        Details
                      </Text>
                    </View>
                    <Text className="text-red-500 text-lg">Cancelled</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};
