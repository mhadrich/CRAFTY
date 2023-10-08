import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomepage from "./screens/Welcomepage";
import Home from "./screens/Home";
import SignUp from "./screens/Auth/SignUp";
import Login from "./screens/Auth/Login";
import ForgetPassword from "./screens/Auth/ForgetPassword";
import CodeConfirmation from "./screens/Auth/CodeConfirmation";
import UpdatePassword from "./screens/Auth/UpdatePassword";
import Authprovider from "./components/Authprovider/Authprovider";
import HomeNavSearch from "./components/Home/HomeNavSearch";
import HomeSearch from "./components/Home/HomeSearch";
import SearchNav from "./components/Home/SearchNav";
import AllProd from "./screens/AllProd";
import AllArticles from "./screens/AllArticles";
import SearchFilters from "./components/Home/SearchFilters";

import Chat from "./screens/chat";
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
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerLeft: null,
              headerTitle: (props) => <HomeNavSearch navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="HomeSearch"
            component={HomeSearch}
            options={({ navigation }) => ({
              headerBackTitleVisible: false,
              headerTintColor: '#8C633F',
              headerTitle: (props) => <SearchNav navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Chat" component={Chat}/>

        <Stack.Screen name="Login" component={Login} options={{headerTitle: "Log In", headerTintColor: '#8C633F'}}/>
          <Stack.Screen name="SearchFilters" component={SearchFilters} />
          <Stack.Screen name="AllProd" component={AllProd} options={{headerTitle: "", headerTintColor: '#8C633F'}}/>
          <Stack.Screen name="AllArticles" component={AllArticles} options={{headerTitle: "", headerTintColor: '#8C633F'}}/>
          <Stack.Screen name="HomeNavSearch" component={HomeNavSearch} options={{headerTintColor: '#8C633F'}}/>
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerTitle: "Forgot Password", headerTintColor: '#8C633F'}}/>
          <Stack.Screen name="CodeConfirmation" component={CodeConfirmation} options={{headerTitle: "Verification Code",headerTintColor: '#8C633F'}}/>
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{headerTitle: "Update Password",headerTintColor: '#8C633F'}}/>
        </Stack.Navigator>
      </Authprovider>
    </NavigationContainer>
  );
}
