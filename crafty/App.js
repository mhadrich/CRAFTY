import React from "react";
import Chat from "./screens/Chat.js"
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
import Profile from "./screens/profile";
import MyOrders from "./components/profile/MyOrders";
import ProductDetail from "./screens/ProductDetail";
import Chat from "./screens/chat";
import HomeNavSearch from "./components/Home/HomeNavSearch";
import HomeSearch from "./components/Home/HomeSearch";
import SearchNav from "./components/Home/SearchNav";
import AllProd from "./screens/AllProd";
import AllArticles from "./screens/AllArticles";
import SearchFilters from "./components/Home/SearchFilters";

import Checkout from "./screens/Cart/Checkout";
import MyBag from "./screens/Cart/MyBag";
import ShippingAddresses from "./screens/Cart/ShippingAddresses";
import PaymentMethod from "./screens/Cart/PaymentMethod";
import Success from "./screens/Cart/Success";
import ArticleView from "./screens/Article/ArticleView";
import Reviews from "./components/ProdDetail/Reviews";
import ArtComCard from "./components/Article/ArtComCard";
import ItemReviewCard from "./components/ProdDetail/ItemReviewCard";
import ArticleComments from "./components/Article/ArticleComments";
import ItemReviewsList from "./components/ProdDetail/ItemReviewsList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Authprovider>
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen
            name="Welcomepage"
            component={Welcomepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyOrders"
            component={MyOrders}
            options={{ headerShown: false }}
          />
          {/* LOGIN */}
          <>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerTitle: "Log In", headerTintColor: "#8C633F" }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{
                headerTitle: "Forgot Password",
                headerTintColor: "#8C633F",
              }}
            />
            <Stack.Screen
              name="CodeConfirmation"
              component={CodeConfirmation}
              options={{
                headerTitle: "Verification Code",
                headerTintColor: "#8C633F",
              }}
            />
            <Stack.Screen
              name="UpdatePassword"
              component={UpdatePassword}
              options={{
                headerTitle: "Update Password",
                headerTintColor: "#8C633F",
              }}
            />
          </>
          {/* HOME */}
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation }) => ({
                headerLeft: null,
                headerTitle: (props) => (
                  <HomeNavSearch navigation={navigation} />
                ),
              })}
            />
            <Stack.Screen
              name="HomeSearch"
              component={HomeSearch}
              options={({ navigation }) => ({
                headerBackTitleVisible: false,
                headerTintColor: "#8C633F",
                headerTitle: (props) => <SearchNav navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="AllProd"
              component={AllProd}
              options={{ headerTitle: "", headerTintColor: "#8C633F" }}
            />
            <Stack.Screen
              name="AllArticles"
              component={AllArticles}
              options={{ headerTitle: "", headerTintColor: "#8C633F" }}
            />
            <Stack.Screen
              name="HomeNavSearch"
              component={HomeNavSearch}
              options={{ headerTintColor: "#8C633F" }}
            />
            <Stack.Screen name="SearchFilters" component={SearchFilters} />
          </>
          {/* CART */}
          <>
            <Stack.Screen
              name="MyBag"
              component={MyBag}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerTitle: "Checkout", headerTintColor: "#8C633F" }}
            />
            <Stack.Screen
              name="ShippingAddresses"
              component={ShippingAddresses}
              options={{
                headerTitle: "Shipping Addresses",
                headerTintColor: "#8C633F",
              }}
            />
            <Stack.Screen
              name="PaymentMethod"
              component={PaymentMethod}
              options={{
                headerTitle: "Payment Method",
                headerTintColor: "#8C633F",
              }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />
          </>
          {/* ARTICLE VIEW */}
          <>
            <Stack.Screen
              name="ArticleView"
              component={ArticleView}
              options={{
                headerTitle: "",
                headerTintColor: "#8C633F",
                headerTransparent: true,
              }}
            />
          </>

<Stack.Screen name="ProductDetail" component={ProductDetail} />
          {/* Chat screens */}
          <>
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Conversation" component={Conversation} />
          </>

          
        
    
        
        

        </Stack.Navigator>
    
      </Authprovider>
    </NavigationContainer>
  );
}
