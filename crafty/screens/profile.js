import { Text, View, Image, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../components/Authprovider/Authprovider";
import axios from "axios";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ADRESS_API from "../Api";
import TabNav from "../components/TabNav/TabNav";
import { Svg, Path } from "react-native-svg";
import Icon from "../components/profile/Icon";

const Profile = ({ navigation }) => {
  const color = useColorScheme();
  const { authState, onLogout } = useAuth();
  const { authenticated, userId } = authState;
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [articles, setArticles] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get(
          `http://${ADRESS_API}:4000/user/getuserById/${userId * 1}`
        );
        setData(userData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const fetchUserData = async () => {
      try {
        const userOrders = await axios.get(
          `http://${ADRESS_API}:4000/order/getorderbyuserId/${userId * 1}`
        );
        setOrders(userOrders.data);
        const userAddress = await axios.get(
          `http://${ADRESS_API}:4000/adress/getadressByUserId/${userId * 1}`
        );
        setAddress(userAddress.data);
        const userReviews = await axios.get(
          `http://${ADRESS_API}:4000/review/getreviewbyuseId/${userId * 1}`
        );
        setReviews(userReviews.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCrafterData = async () => {
      try {
        const crafterArticles = await axios.get(
          `http://${ADRESS_API}:4000/article/getarticlebyUserId/${userId * 1}`
        );
        setArticles(crafterArticles.data);
        const crafterItems = await axios.get(
          `http://${ADRESS_API}:4000/item/getitemByUserId/${userId * 1}`
        );
        setItems(crafterItems.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (data && data.role === "user") {
      fetchUserData();
    } else if (data && data.role === "crafter") {
      fetchCrafterData();
    }
  }, []);
  const handleLogout = async () => {
    const res = await onLogout();
    console.log("Goodbye");
    navigation.navigate("Login");
  };

  if (authenticated) {
    return (
      <View className="dark:bg-[#111111] w-screen h-screen">
        <TabNav navigation={navigation} />
        <View className=" mt-[18%] ">
          <Text className="text-4xl font-bold ml-5 mb-2 dark:text-white">
            My Profile
          </Text>
          <View className=" flex flex-row items-center mt-[50pw] p-5  ">
            <Image
              className="w-[70px] h-[70px] rounded-[200px] mr-5"
              source={{
                uri: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
              }}
            />
            <View>
              <Text className="text-2xl font-bold dark:text-white">
                {data.name || "Amine"}
              </Text>
              <Text className="text-[#999] text-base">
                {data.email || "slimaniamin76@gmail.com"}
              </Text>
              <Text className="text-[#999] text-base">
                {data.role || "user"}
              </Text>
            </View>
          </View>
          <View className="divide-y divide-slate-200">
            {/* User settings */}
            {data.role === "user" && (
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3 ">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("MyOrders", { orders: orders })
                    }
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold dark:text-white">
                        My Orders
                      </Text>
                      <Icon />
                    </View>
                    <Text className="text-[#999] text-s">
                      Already have {orders.length} orders
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {data.role === "user" && (
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ShippingAddresses")}
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold dark:text-white">
                        Shipping Addresses
                      </Text>
                      <Icon />
                    </View>
                    <Text className="text-[#999] text-s">
                      {address.length} Adresses
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {data.role === "user" && (
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PaymentMethod")}
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold dark:text-white">
                        Payment methods
                      </Text>
                      <Icon />
                    </View>
                    <Text className="text-[#999] text-s">
                      There is no methods for now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* {data.role === "user" && (
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Reviews")}
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold dark:text-white">
                        My reviews
                      </Text>
                      <Icon />
                    </View>
                    <Text className="text-[#999] text-s">
                      reviews from {reviews.length} items
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )} */}

            {/* crafter settings */}
            {data.role === "crafter" && (
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3 ">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("AddItem")}
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold">Add Item</Text>
                      <Icon />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {data.role === "crafter" && (
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3 ">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("AllProd", { data: items })
                    }
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold">my Items</Text>
                      <Icon />
                    </View>
                    <Text className="text-[#999] text-s">
                      you have already {items.length} items
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {data.role === "crafter" && (
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3 ">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("WriteArticle")}
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold">Add Article</Text>
                      <Icon />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {data.role === "crafter" && (
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3 ">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("AllArticles", { data: articles })
                    }
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold">my Articles </Text>
                      <Icon />
                    </View>
                    <Text className="text-[#999] text-s">
                      you have already {articles.length} Article(s)
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {/* settings */}
            <View>
              <View className="flex justify-between ml-4 mb-3 mt-3">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Settings", { data: data })
                  }
                >
                  <View className="flex flex-row justify-between">
                    <Text className="text-base font-bold dark:text-white">
                      Settings
                    </Text>
                    <Svg
                      className="w-4 h-4 mr-4 mt-2"
                      viewBox="0 0 6 8"
                      fill="none"
                    >
                      <Path
                        d="M0.726562 7.06L3.7799 4L0.726562 0.94L1.66656 -4.10887e-08L5.66656 4L1.66656 8L0.726562 7.06Z"
                        fill={color === "light" ? "#222222" : "#ffffff"}
                      />
                    </Svg>
                  </View>

                  <Text className="text-[#999] text-s">
                    Notifications , Password ...
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Logout */}
            <View>
              <View className=" flex items-center justify-center mt-5">
                <Text
                  className="text-base font-bold text-red-500"
                  onPress={() => handleLogout()}
                >
                  LogOut
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View className="flex items-center justify-center h-screen dark:bg-[#111111]">
        <Text className="text-lg font-bold text-center dark:text-white">
          You don't have an account.
        </Text>
        <View className="flex flex-row gap-2 items-center justify-center">
          <Text className="text-lg font-bold dark:text-white">Please </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-[#BF9B7A] underline text-lg font-semibold">
              Log In
            </Text>
          </TouchableOpacity>
          <Text className="text-lg font-bold dark:text-white"> or </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="text-[#BF9B7A] underline text-lg font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <TabNav navigation={navigation} />
      </View>
    );
  }
};

export default Profile;
