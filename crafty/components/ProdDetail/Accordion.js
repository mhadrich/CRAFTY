import React from "react";
import { Text, View, TouchableOpacity, useColorScheme } from "react-native";
// import data from "data.json";
import { Svg, Path } from "react-native-svg";

export default function Accordion({ details }) {
  const data = [
    {
      Title: "Item Details",
      Description: `${details.description}`
    },
    {
      Title: "Shipping Infos",
      Description:
        "\nThis crafter supports Crafty Guaranteed shipping and also ship by his own means.\n\nOnce your order has been processed and shipped, we will provide you with a tracking number. You can use this number to monitor the progress of your shipment on our website or the carrier's website.\n\nDelivery times may vary depending on your location, shipping method, and any unforeseen circumstances like weather delays. We will do our best to ensure your items reach you as quickly as possible.\n",
    },
    {
      Title: "Support",
      Description:
        "If you have any questions or concerns about your shipment, please don't hesitate to contact our friendly customer support team. We are here to assist you.\n \nWe value your business and strive to make your shipping experience with Crafty as smooth as possible. Thank you for choosing us, and we look forward to serving you!\n \nIf you have any further questions or need assistance with your order, please don't hesitate to get in touch with our customer support team.\n \nsupport@crafty.com \n",
    },
  ];
  const color = useColorScheme();
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [isRotated, setIsRotated] = React.useState(false);

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  return (
    <View>
      <View className="flex-1 bg-f9f9f9 justify-center">
        {data.map(({ Title, Description }, index) => {
          return (
            <TouchableOpacity
              key={Title}
              onPress={() => {
                setCurrentIndex(index === currentIndex ? null : index);
              }}
              activeOpacity={0.9}
            >
              <View className="flex-grow">
                <View className="flex flex-row p-4 justify-between items-center">
                  <Text className="text-base tracking-wide items-center justify-between dark:text-white">
                    {Title}
                  </Text>
                  <Svg
                    className={`w-4 h-4 ${isRotated ? "rotate-90" : ""}`}
                    viewBox="0 0 6 8"
                    fill="none"
                    onPress={toggleRotation}
                  >
                    <Path
                      d="M0.726562 7.06L3.7799 4L0.726562 0.94L1.66656 -4.10887e-08L5.66656 4L1.66656 8L0.726562 7.06Z"
                      fill={color === "light" ? "#222222" : "#ffffff"}
                    />
                  </Svg>
                </View>
                <View className="px-4">
                  {Title === "Item Details" && index === currentIndex && (
                    <Text className="text-sky-500 mb-2 underline underline-offset-4">
                      {/* Tag1-Tag2-Tag3 */}
                    </Text>
                  )}
                  {index === currentIndex && (
                    <Text
                      key={Description}
                      className="text-sm leading-6 text-left mb-6 dark:text-white"
                    >
                      {Description}
                    </Text>
                  )}
                </View>
                <View className="border-t opacity-25 dark:border-white" />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
