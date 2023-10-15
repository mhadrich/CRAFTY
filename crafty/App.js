import React from "react";
import Chat from "./screens/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomepage from "./screens/Welcomepage";
import Home from "./screens/Home"
import SignUp from "./screens/Auth/SignUp";
import Login from "./screens/Auth/Login";
import ForgetPassword from "./screens/Auth/ForgetPassword";
import CodeConfirmation from "./screens/Auth/CodeConfirmation";
import UpdatePassword from "./screens/Auth/UpdatePassword";
import Authprovider from "./components/Authprovider/Authprovider";

import Conversation from "./screens/Conversation";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Authprovider>
      <Stack.Navigator initialRouteName="Welcomepage">
        <Stack.Screen
          name="Welcomepage"
          component={Welcomepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="Conversation" component={Conversation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="CodeConfirmation" component={CodeConfirmation} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      </Stack.Navigator>
      </Authprovider>
    </NavigationContainer>
    
  );
}
