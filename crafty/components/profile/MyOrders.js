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

  const dummyData = [
    {
      id: 1,
      deliveredProcessing: "Delivered",
      dateOfDelivery: "2023-10-10",
      trackingNumber: "IW3475453455",
      quantity: 3,
      items: [{ price: 120 }, { name: "Makah" }],
    },
    {
      id: 2,
      deliveredProcessing: "Processing",
      dateOfDelivery: "2023-10-12",
      trackingNumber: "IW3475453456",
      quantity: 2,
      items: [{ price: 80 }, { name: "Makah" }],
    },
    {
      id: 3,
      deliveredProcessing: "Cancelled",
      dateOfDelivery: "2023-10-15",
      trackingNumber: "IW3475453457",
      quantity: 1,
      items: [{ price: 10 }, { name: "Makah" }],
    },
    {
      id: 4,
      deliveredProcessing: "Delivered",
      dateOfDelivery: "2023-10-15",
      trackingNumber: "IW3475453457",
      quantity: 1,
      items: [{ price: 50 }, { name: "Makah" }],
    },
  ];
  useEffect(() => {
    setOrders(dummyData);
  }, []);
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className=" bg-[rgba(249,249,249,1)] flex flex-col  mt-[10%] ">
        <View className=" flex flex-col  ml-4">
          <Text className="text-left text-[rgba(34,34,34,1)] text-[34px] font-bold tracking-[0] ">{`My Orders`}</Text>
        </View>
        {/* buttons */}
        <View className="flex flex-row items-center p-5 justify-center">
          <View className=" flex flex-col ">
            <TouchableOpacity onPress={() => setActiveButton("Delivered")}>
              <View className="bg-[rgba(34,34,34,1)]    " />
              <Text
                className={`flex flex-col text-center  text-base font-medium  p-3 pl-7 pr-7  rounded-[200px] ${
                  activeButton === "Delivered"
                    ? "bg-black text-white"
                    : "bg-[#72696900]"
                } `}
              >{`Delivered`}</Text>
            </TouchableOpacity>
          </View>
          <View className=" ">
            <TouchableOpacity onPress={() => setActiveButton("Processing")}>
              <Text
                className={`flex flex-col text-center  text-base font-medium  p-3 pl-7 pr-7  rounded-[200px] ${
                  activeButton === "Processing"
                    ? "bg-black text-white"
                    : "bg-transparent"
                } `}
              >{`Processing`}</Text>
            </TouchableOpacity>
          </View>
          <View className=" ">
            <TouchableOpacity onPress={() => setActiveButton("Cancelled")}>
              <Text
                className={`flex flex-col text-center  text-base font-medium  p-3 pl-7 pr-7   rounded-[200px] ${
                  activeButton === "Cancelled"
                    ? "bg-black text-white"
                    : "bg-transparent"
                } `}
              >{`Cancelled`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex justify-between items-center mb-5">
          <Text className="text-lg font-semibold">{`Details`}</Text>
        </View>
        {/* delivered container */}
        {activeButton === "Delivered" &&
          delivredOrders.map((e) => {
            return (
              <View className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-1 mt-2">
                <View className=" flex flex-row items-center justify-between ">
                  <Text className="text-sm font-semibold ">
                    Order № {`1947034` && e.id}
                  </Text>
                  <Text className="text-gray-500 mt-2">
                    {`05-12-2019` && e.dateOfDelivery}
                  </Text>
                </View>
                <View className="mt-2 flex flex-row items-center">
                  <Text>{`Tracking number : `}</Text>
                  <Text className="font-semibold">
                    {`  IW3475453455` && e.trackingNumber}
                  </Text>
                </View>
                <View className="mt-2 flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center">
                    <Text className="flex justify-between">{`Quantity :`}</Text>
                    <Text className="text-gray-500">{`  3` && e.quantity}</Text>
                  </View>
                  <View className="flex flex-row items-center">
                    <Text>{`Total Amount:`}</Text>
                    <Text className="font-semibold">
                      {`112$` && e.items.price * e.quantity}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  className="  hover:underline mt-5 flex flex-row items-center justify-between "
                  onPress={() =>
                    navigation.navigate("OrderDetails", { data: e })
                  }
                >
                  <Text className="text-center text-black text-base font-medium  p-3 pl-7 pr-7 mr-5 border-2 border-black rounded-[200px]  ">
                    Details
                  </Text>
                  <Text className="text-[#707324] text-lg">Delivered</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        {/* Processing container */}
        {activeButton === "Processing" &&
          processingOrders.map((e) => {
            return (
              <View className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-1 mt-2">
                <View className=" flex flex-row items-center justify-between ">
                  <Text className="text-sm font-semibold ">
                    Order № {`1947034` && e.id}
                  </Text>
                  <Text className="text-gray-500 mt-2">
                    {`05-12-2019` && e.dateOfDelivery}
                  </Text>
                </View>
                <View className="mt-2 flex flex-row items-center">
                  <Text>{`Tracking number : `}</Text>
                  <Text className="font-semibold">
                    {`  IW3475453455` && e.trackingNumber}
                  </Text>
                </View>
                <View className="mt-2 flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center">
                    <Text className="flex justify-between">{`Quantity :`}</Text>
                    <Text className="text-gray-500">{`  3` && e.quantity}</Text>
                  </View>
                  <View className="flex flex-row items-center">
                    <Text>{`Total Amount:`}</Text>
                    <Text className="font-semibold">
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
                  <Text className="text-center text-black text-base font-medium  p-3 pl-7 pr-7 mr-5 border-2 border-black rounded-[200px]  ">
                    Details
                  </Text>
                  <Text className="text-blue-500 text-lg">Processing</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        {/* Cancelled container */}
        {activeButton === "Cancelled" &&
          cancelledOrders.map((e) => {
            return (
              <View className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-1 mt-2">
                <View className=" flex flex-row items-center justify-between ">
                  <Text className="text-sm font-semibold ">
                    Order № {`1947034` && e.id}
                  </Text>
                  <Text className="text-gray-500 mt-2">
                    {`05-12-2019` && e.dateOfDelivery}
                  </Text>
                </View>
                <View className="mt-2 flex flex-row items-center">
                  <Text>{`Tracking number : `}</Text>
                  <Text className="font-semibold">
                    {`  IW3475453455` && e.trackingNumber}
                  </Text>
                </View>
                <View className="mt-2 flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center">
                    <Text className="flex justify-between">{`Quantity :`}</Text>
                    <Text className="text-gray-500">{`  3` && e.quantity}</Text>
                  </View>
                  <View className="flex flex-row items-center">
                    <Text>{`Total Amount:`}</Text>
                    <Text className="font-semibold">
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
                  <Text className="text-center text-black text-base font-medium  p-3 pl-7 pr-7 mr-5 border-2 border-black rounded-[200px]  ">
                    Details
                  </Text>
                  <Text className="text-red-500 text-lg">Cancelled</Text>
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};
