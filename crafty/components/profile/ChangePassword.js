import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import axios from "axios";
import ADDRESS_API from "../../Api";

const ChangePassword = ({ navigation, data }) => {
  const [newPass, setNewPass] = useState({
    oldPassword: "",
    newPassword: "",
    cnewPassword: "",
  });
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const handleInputChange = (field, value) => {
    setNewPass({
      ...newPass,
      [field]: value,
    });
  };

  const verif = () => {
    console.log(newPass, data.password, newPass.oldPassword);

    if (!newPass.oldPassword) {
      setError("Please provide your old password.");
    } else {
      if (newPass.newPassword.length < 8) {
        setError2("New password must be at least 8 characters long.");
      } else if (newPass.newPassword !== newPass.cnewPassword) {
        setError2("Confirm your new password.");
      } else {
        axios
          .post(`http://${ADDRESS_API}:4000/reset/change-password`, {
            email: data.email,
            oldPassword: newPass.oldPassword,
            newPassword: newPass.newPassword,
          })
          .then(() => {
            alert("updated successfully");
            navigation.navigate("Login");
          })
          .catch(() => {
            setError("Please provide your old password correctly.");
          });
      }
    }
  };

  const inputs =
    "w-fit h-16 pl-3 bg-[#f9f9f9] dark:bg-[#111111] dark:text-white rounded-md shadow-sm";

  return (
    <ScrollView>
      <View className="gap-4">
        <Text className="text-2xl font-bold dark:text-white">
          Password change
        </Text>
        <TextInput
          className={inputs}
          placeholder={"Old Password"}
          onChangeText={(query) => {
            handleInputChange("oldPassword", query);
            setError("");
          }}
          value={newPass.oldPassword}
          secureTextEntry={true}
        />
        {error && <Text className="text-red-500">{error}</Text>}
        <View className="w-fit items-end">
          <Text
            className="text-gray-400"
            onPress={() => navigation.navigate("ForgetPassword")}
          >
            Forgot Password
          </Text>
        </View>
        <TextInput
          className={inputs}
          placeholder={"New Password"}
          onChangeText={(query) => {
            handleInputChange("newPassword", query);
            setError2("");
          }}
          value={newPass.newPassword}
          secureTextEntry={true}
        />
        <TextInput
          className={inputs}
          placeholder={"Confirm New Password"}
          onChangeText={(query) => {
            handleInputChange("cnewPassword", query);
            setError2("");
          }}
          value={newPass.cnewPassword}
          secureTextEntry={true}
        />
        {error2 && <Text className="text-red-500">{error2}</Text>}
        <View className="w-fit justify-between mb-24">
          <TouchableOpacity
            onPress={() => verif()}
            className="z-50 bg-[#BF9B7A] h-12 w-fit rounded-full justify-center items-center"
          >
            <Text className="text-center text-white text-sm font-medium leading-tight">
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;
