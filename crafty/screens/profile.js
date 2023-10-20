import { Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../components/Authprovider/Authprovider";
import axios from "axios";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import ADRESS_API from "../Api";

const Profile = ({ navigation }) => {
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
          `${ADRESS_API}:4000/user/getuserById/${userId}`
        );
        setData(userData.data);
        const userOrders = await axios.get(
          `${ADRESS_API}:4000/order/getorderbyuserId/${userId}`
        );
        setOrders(userOrders.data);
        const userAddress = await axios.get(
          `${ADRESS_API}:4000/adress/getadressByUserId/${userId}`
        );
        setAddress(userAddress.data);
        const userReviews = await axios.get(
          `${ADRESS_API}:4000/review/getreviewbyuseId/${userId}`
        );
        setReviews(userReviews.data);
      } catch (error) {
        console.log(error);
      }
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
  if (authenticated === false) {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" mt-[18%]">
          <Text className="text-4xl font-bold ml-5 mb-2">My Profile</Text>
          <View className=" flex flex-row items-center mt-[50pw] p-5  ">
            <Image
              className="w-[70px] h-[70px] rounded-[200px] mr-5"
              source={{
                uri: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
              }}
            />
            <View>
              <Text className="text-2xl font-bold">
                {"John Doe" || data.name}
              </Text>
              <Text className="text-[#999] text-base">
                {"@johndoe" || data.email}
              </Text>
            </View>
          </View>
          <View className="divide-y divide-slate-200">
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
            <View>
              <View className="flex justify-between ml-4 mb-3 mt-3 ">
                <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                  <View className="flex flex-row justify-between">
                    <Text className="text-base font-bold">
                      My Conversations
                    </Text>
                    <Image
                      className="w-[18px] h-[18px] mt-2 mr-2"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
                    ></Image>
                  </View>

                  <Text className="text-[#999] text-s">
                    Already have 0 conversations
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
            <View>
              <View className="flex justify-between ml-4 mb-3 mt-3">
                <TouchableOpacity
                  onPress={() => navigation.navigate("PaymentMethod")}
                >
                  <View className="flex flex-row justify-between">
                    <Text className="text-base font-bold">Payment methods</Text>
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
    );
  } else {
    return (
      <View className="flex items-center justify-center h-screen">
        <Text className="text-lg font-bold text-center">
          You don't have an account. Please {"\n"}
        </Text>
        <View className="flex flex-row items-center justify-center">
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-amber-700 underline text-lg">
              login first
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Profile;
