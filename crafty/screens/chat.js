import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import io from "socket.io-client";
import ADRESS_API from "../Api";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import Logo from "../assets/inactirrrve.svg";
import { useAuth } from "../components/Authprovider/Authprovider";

const socket = io(`http://${ADRESS_API}:4000/`);

function Chat({ route }) {

  const { authState } = useAuth()
  const { otherUserId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatid, setchatid] = useState("");
 
  const ScrollViewRef = useRef();
  const userid = authState.userId*1
  const getChatID = async (user1, user2) => {
    try {
      const res = await axios.post(`http://${ADRESS_API}:4000/chat/getId`, {
        user1: user1,
        user2: user2,
      });
      console.log("res", res.data);
      if (res) {
        setchatid(`${res.data.id}`);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const getMessage = async (userId, otherUserId) => {
    

    try {
      const res = await axios.post(
        `http://${ADRESS_API}:4000/chat/getmessage`,
        { userId: userid, otherUserId: otherUserId }
      );
      console.log("res :messff", res.data);
      if (res) {
        setMessages(res.data);
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    
    
    socket.emit("joinChat", { userid, otherUserId });

    getChatID(userid, otherUserId);
    getMessage(userid, otherUserId);
    
    return () => {
      socket.emit("leaveChat", { userid, otherUserId });
    };

  }, []);

  const SenderMessageStyle =
    "bg-[#717331]  flex-1 mb-2  py-2 px-4 rounded-full rounded-bl-none";

  const sendMessage = () => {
    socket.emit("sendMessage", {
      chatId: `${chatid}`,
      userId: userid,
      text: newMessage,
    });
    setNewMessage("");
    ScrollViewRef.current.scrollToEnd({ animated: true })
  };
  socket.on("message", (message) => {
    setMessages([...messages, message]);
  });

  return (
    <View className="flex-1 h-screen bg-[#f9f9f9]">

      <ScrollView className="flex-col col-revers px-6 " ref={ScrollViewRef}>
        {messages &&
          messages.map((message, index) => (
            <View
              className={
                message.sender === userid ? "items-start" : " items-end "
              }
            >
              <View
                className={
                  message.sender === userid
                    ? SenderMessageStyle
                    : "bg-[#ECEBEB]  flex-1 mb-2 py-2  px-4 rounded-full rounded-br-none"
                }
                key={index}
              >
                <Text
                  className={
                    message.sender === userid
                      ? " text-left text-[#ffffff] text-lg"
                      : " text-left text-[#262406] text-lg"
                  }
                >
                  {message.text}
                </Text>
              </View>
              <Text className=" text-right text-gray-700 mb-2 mr-2 mt-0 text-xs">
                {String(new Date(message.createdAt).getHours()).padStart(2, '0')}:{String(new Date(message.createdAt).getMinutes()).padStart(2, '0')}
              </Text>
            </View>
          ))}
      </ScrollView>
      <View className="flex-row space-x-1  bg-white  items-center h-20">

        <TextInput
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          className=" mr-1  px-6  ml-[5%] w-[79%] h-[60%]    border-gray-400 border rounded-3xl  tex"
          onFocus={() =>
            ScrollViewRef.current.scrollToEnd({ animated: true })
          }
        />
        <TouchableOpacity onPress={sendMessage} className="ml-40 w-10  "><Logo className=" w-6" /></TouchableOpacity>

      </View>
    </View>
  );
}

export default Chat;