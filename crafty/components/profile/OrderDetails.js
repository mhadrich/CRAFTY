import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import ADRESS_API from "../../Api";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const OrderDetails = ({ route, navigation }) => {
  const { data } = route.params;

  const dummyItems = [
    {
      name: "Wood Map",
      images: [
        "https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg",
      ],
      reviewId: "1234",
      price: 50,
    },
    {
      name: "Wooden Clock",
      images: [
        "https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg",
      ],
      reviewId: "5678",
      price: 75,
    },
    {
      name: "Wooden Clock",
      images: [
        "https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg",
      ],
      reviewId: "5678",
      price: 75,
    },
  ];
  const [items, setItems] = useState(dummyItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await axios.get(
          `${ADRESS_API}:4000/order/getorderbyId/${data.id}`
        );
        setItems(items.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data.id]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="m-5">
        <View className=" flex flex-row items-center justify-between ">
          <Text className="text-xl font-semibold ">
            Order № {`1947034` && data.id}
          </Text>
          <Text className="text-gray-500 mt-2">
            {`05-12-2019` && data.dateOfDelivery}
          </Text>
        </View>
        <View className="mt-2 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Text className=" text-gray-500">{`Tracking number : `}</Text>
            <Text className="font-semibold ">
              {`  IW3475453455` && data.trackingNumber}
            </Text>
          </View>
          <View>
            <Text
              className={`${
                data.deliveredProcessing === "Delivered"
                  ? "text-[#707324]"
                  : data.deliveredProcessing === "Processing"
                  ? "text-blue-500"
                  : "text-red-500"
              } text-lg`}
            >
              {data.deliveredProcessing}
            </Text>
          </View>
        </View>

        <Text className="text-lg font-semibold mt-6 mb-3">
          {" "}
          {data.quantity} Items
        </Text>
        {/* cards */}
        {items &&
          items.map((e) => {
            return (
              <View className="flex flex-row pb-4 mt-2">
                <Image
                  className="w-24 h-24 rounded-l-lg"
                  src={
                    `https://i.etsystatic.com/22703156/r/il/8f4019/3358914263/il_1588xN.3358914263_dlpj.jpg` &&
                    e.images[0]
                  }
                />
                <View className="bg-white w-9/12 h-24 rounded-r-lg p-4 flex  justify-between">
                  <View className="flex flex-row h-6">
                    <Text className="text-base font-semibold">Wood Map</Text>
                  </View>
                  <Text className=" text-gray-500">{e.name}</Text>
                  <View className=" flex flex-row  items-center mt-2 justify-between">
                    <Text className=" text-gray-500">{e.reviewId}</Text>
                    <Text className="text-right  z-0 text-sm font-medium leading-tight">
                      {e.price}$
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}

        {/* Order Information */}
        <View>
          <Text className="text-xl font-semibold mb-4 ">
            {" "}
            Order Information{" "}
          </Text>
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-gray-500 text-base">{`Shipping Address : `}</Text>
            <Text className="font-semibold text-base">{`  Tunisia`}</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-gray-500 text-base">{`Payment method : `}</Text>
            <Text className="font-semibold text-base">{`  **** **** **** 4296`}</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-gray-500 text-base">{`Delivery method :`}</Text>
            <Text className="font-semibold text-base">{`  Fedex , 2days , 5$`}</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-gray-500 text-base">{`Discount : `}</Text>
            <Text className="font-semibold text-base">{`  10% personal promocode`}</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className=" text-gray-500 text-base">{`Total Amount : `}</Text>
            <Text className="font-semibold text-base">
              {data.items[0].price * data.quantity}${" "}
            </Text>
          </View>
          <View className="flex flex-row items-center p-5 justify-center">
            <View className=" flex flex-col ">
              <TouchableOpacity
                onPress={() => navigation.navigate("", { data })}
              >
                <View className="bg-[rgba(34,34,34,1)]    " />
                <Text
                  className={`text-center text-black text-base font-medium  p-3  pl-9 pr-9 mr-5 border-2 border-[#BF9B7A] rounded-[200px] `}
                >{`Reorder `}</Text>
              </TouchableOpacity>
            </View>
            <View className=" ">
              <TouchableOpacity
                onPress={() => navigation.navigate("", { data })}
              >
                <Text
                  className={`flex flex-col text-center text-white text-base font-medium  p-3 pl-7 pr-7 bg-[#BF9B7A] rounded-[200px]  text-whit `}
                >{`Leave Feedback`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetails;
