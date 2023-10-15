import { Text, View } from "react-native";
import React, { Component } from "react";

const profile = () => {
  return (
    <View className="bg-white ">
      <View className=" flex flex-row items-center mt-[50pw] p-5">
        <Text>My Profile</Text>
        <Image
          className="x-[70px] h-[70px] rounded-[50p%]"
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
          }}
        />
        <View>
          <Text className="text-2xl font-bold">John Doe</Text>
          <Text className="text-[#999] text-lg">@johndoe</Text>
        </View>
      </View>
      <View>
        <View className="flex justify-between">
          <Text className="text-2xl font-bold">My Orders</Text>
          <Text className="text-[#999] text-lg">Already have 12 orders</Text>
        </View>
        <Image
          className="w-[10px] h-[10px]"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
        ></Image>
      </View>
      <View>
        <View className="flex justify-between">
          <Text className="text-2xl font-bold">Shipping Addresses</Text>
          <Text className="text-[#999] text-lg">3 ddresses</Text>
        </View>
        <Image
          className="w-[10px] h-[10px]"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
        ></Image>
      </View>
      <View>
        <View className="flex justify-between">
          <Text className="text-2xl font-bold">Payment methods</Text>
          <Text className="text-[#999] text-lg">Visa **34</Text>
        </View>
        <Image
          className="w-[10px] h-[10px]"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnUlEQVR4nO3aQQrCQBBE0X+R6cYbSTQrvf85RBjBjQt31UU9yD7FTyAhgQgpDZzADVgMdgLPfTz2sJHuX0NGj6l98tZjLgxUGSOqUkZUpYyoShlRKaMqZVSljCqrMv1jzMJkzMFAFkPa4dJqh5u9M0JESqhICRUpoSIlVKSEis6zk4h2KLFcPoYeDiPYfzyMH/G5tN5VrtPesSP4zwsjFlWYroy7PAAAAABJRU5ErkJggg=="
        ></Image>
      </View>
    </View>
  );
};

export default profile;
