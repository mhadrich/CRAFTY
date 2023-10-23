import { Text, View, Image, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../components/Authprovider/Authprovider";
import axios from "axios";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ADRESS_API from "../Api";
import TabNav from "../components/TabNav/TabNav";
import { Svg, Path } from "react-native-svg";

const Profile = ({ navigation }) => {
  const color = useColorScheme();
  const { authState, onLogout } = useAuth();
  const { authenticated, userId } = authState;
  const [data, setData] = useState({});
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get(
          `${ADRESS_API}:4000/user/getuserById/${userId*1}`
        );
        setData(userData.data);
        const userOrders = await axios.get(
          `http//${ADRESS_API}:4000/order/getorderbyuserId/${userId*1}`
        );
        setOrders(userOrders.data);
        const userAddress = await axios.get(
          `${ADRESS_API}:4000/adress/getadressByUserId/${userId*1}`
        );
        setAddress(userAddress.data);
        const userReviews = await axios.get(
          `${ADRESS_API}:4000/review/getreviewbyuseId/${userId*1}`
        );
        setReviews(userReviews.data);
      } catch (error) {
        console.log(error);
      }
      setData({ role: "user" });
    };
    fetchData();
  }, [userId]);

  const handleLogout = async () => {
    const res = await onLogout();
    if (res === 200) {
      console.log("Goodbye");
      navigation.navigate("Login");
    } else {
      alert(res);
    }
  };
  if (authenticated) {
    return (
      <>
        <ScrollView
          className="dark:bg-[#111111]"
          showsVerticalScrollIndicator={false}
        >
          <View className=" mt-[18%] ">
            <Text className="text-4xl font-bold ml-5 mb-2 dark:text-white">
              My Profile
            </Text>
            <View className=" flex flex-row items-center mt-[50pw] p-5  ">
              <Image
                className="w-[70px] h-[70px] rounded-[200px] mr-5"
                source={{
                  uri: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
                }}
              />
              <View>
                <Text className="text-2xl font-bold dark:text-white">
                  {"Amine" || data.name}
                </Text>
                <Text className="text-[#999] text-base">
                  {"amineslimani67@gmail.com" || data.email}
                </Text>
                <Text className="text-[#999] text-base">
                  {"user" || data.role}
                </Text>
              </View>
            </View>
            <View className="divide-y divide-slate-200">
              {/* User settings */}

              {data.role === "user" && (
                <View>
                  <View className="flex justify-between ml-4 mb-3 mt-3 ">
                    <TouchableOpacity
                      onPress={() => navigation.navigate("MyOrders")}
                    >
                      <View className="flex flex-row justify-between">
                        <Text className="text-base font-bold">My Orders</Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
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
                        <Text className="text-base font-bold">
                          Shipping Addresses
                        </Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
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
                        <Text className="text-base font-bold">
                          Payment methods
                        </Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
                      </View>

                      <Text className="text-[#999] text-s">
                        There is no methods for now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {data.role === "user" && (
                <View>
                  <View className="flex justify-between ml-4 mb-3 mt-3">
                    <TouchableOpacity onPress={() => navigation.navigate("")}>
                      <View className="flex flex-row justify-between">
                        <Text className="text-base font-bold">PromoCodes</Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
                      </View>

                      <Text className="text-[#999] text-s">
                        You have special promocodes
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {data.role === "user" && (
                <View>
                  <View className="flex justify-between ml-4 mb-3 mt-3">
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Reviews")}
                    >
                      <View className="flex flex-row justify-between">
                        <Text className="text-base font-bold">My reviews</Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
                      </View>

                      <Text className="text-[#999] text-s">
                        reviews from {reviews.length} items
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* crafter settings */}
              {data.role === "crafter" && (
                <View>
                  <View className="flex justify-between ml-4 mb-3 mt-3 ">
                    <TouchableOpacity
                      onPress={() => navigation.navigate("AddItem")}
                    >
                      <View className="flex flex-row justify-between">
                        <Text className="text-base font-bold">Add Item</Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {data.role === "crafter" && (
                <View>
                  <View className="flex justify-between ml-4 mb-3 mt-3 ">
                    <TouchableOpacity
                      onPress={() => navigation.navigate("AllArticles")}
                    >
                      <View className="flex flex-row justify-between">
                        <Text className="text-base font-bold">my Items</Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
                      </View>
                      <Text className="text-[#999] text-s">
                        you have already {} items
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {data.role === "crafter" && (
                <View>
                  <View className="flex justify-between ml-4 mb-3 mt-3 ">
                    <TouchableOpacity
                      onPress={() => navigation.navigate("add")}
                    >
                      <View className="flex flex-row justify-between">
                        <Text className="text-base font-bold">Add Article</Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {data.role === "crafter" && (
                <View>
                  <View className="flex justify-between ml-4 mb-3 mt-3 ">
                    <TouchableOpacity
                      onPress={() => navigation.navigate("AllArticles")}
                    >
                      <View className="flex flex-row justify-between">
                        <Text className="text-base font-bold">my Articles</Text>
                        <Image
                          className="w-[18px] h-[18px] mt-2 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                        ></Image>
                      </View>
                      <Text className="text-[#999] text-s">
                        you have already {} Article(s)
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* settings */}
              <View>
                <View className="flex justify-between ml-4 mb-3 mt-3">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Settings")}
                  >
                    <View className="flex flex-row justify-between">
                      <Text className="text-base font-bold">Settings</Text>
                      <Image
                        className="w-[18px] h-[18px] mt-2 mr-2"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                      ></Image>
                    </View>

                    <Text className="text-[#999] text-s">
                      Notifications , Password ...
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* logout */}
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
        </ScrollView>
        <View className="mb-[30%]"></View>
        <TabNav navigation={navigation} />
      </>
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
