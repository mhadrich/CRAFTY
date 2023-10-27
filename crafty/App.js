import React, { useEffect, useState } from "react";
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

import ProductDetail from "./screens/ProductDetail";
import Chat from "./screens/Chat";
import Conversation from "./screens/Conversation";
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
import WriteArticle from "./screens/Article/WriteArticle";
import Profile from "./screens/profile";
import MyOrders from "./components/profile/MyOrders";
import OrderDetails from "./components/profile/OrderDetails";
import Settings from "./components/profile/Settings";
import ChangePassword from "./components/profile/ChangePassword";
import AddItem from "./screens/AddItem";
import Favorites from "./screens/Favorites";
import FavNavSearch from "./components/Favorites.js/FavNavSearch";
import { useColorScheme } from "react-native";
import { StatusBar } from "react-native";
import { LogBox } from "react-native";
import Loading from "./components/Loading";

const Stack = createStackNavigator();

// Ignore log notification by message
LogBox.ignoreLogs(["Warning: ..."]);
//Ignore all log notifications
LogBox.ignoreAllLogs();

export default function App() {
  const color = useColorScheme();
  const [headerColor, setHeaderColor] = useState("");
  const [statusColor, setStatusColor] = useState("");
  useEffect(() => {
    if (color === "dark") {
      setHeaderColor("#111111");
      setStatusColor("light-content");
    } else {
      setHeaderColor("#f9f9f9");
      setStatusColor("dark-content");
    }
  }, [color]);
  return (
    <NavigationContainer>
      <Authprovider>
        <Stack.Navigator
          initialRouteName="SignUp"
          screenOptions={{ headerStyle: { backgroundColor: `${headerColor}` } }}
        >
          <Stack.Screen
            name="Welcomepage"
            component={Welcomepage}
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
              options={{
                headerTitle: "",
                headerTintColor: "#8C633F",
              }}
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
            <Stack.Screen
              name="WriteArticle"
              component={WriteArticle}
              options={{
                headerTitle: "Write an article",
                headerTintColor: "#8C633F",
              }}
            />
          </>
          {/*Product-Detail */}
          <>
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{
                headerTitle: "Product Details",
                headerTintColor: "#8C633F",
              }}
            />
            <Stack.Screen name="ItemReviewsList" component={ItemReviewsList} />
          </>
          {/* Chat screens */}
          <>
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{
                headerTitle: "Message Seller",
                headerTintColor: "#8C633F",
              }}
            />
            <Stack.Screen
              name="Conversation"
              component={Conversation}
              options={{
                headerTitle: "Conversations",
                headerTintColor: "#8C633F",
              }}
            />
          </>
          {/* profile */}
          <>
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyOrders"
              component={MyOrders}
              options={{ headerTitle: "", headerTintColor: "#8C633F" }}
            />
            <Stack.Screen
              name="OrderDetails"
              component={OrderDetails}
              options={{
                headerTitle: "OrderDetails",
                headerTintColor: "#8C633F",
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerTitle: "", headerTintColor: "#8C633F" }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerTitle: "", headerTintColor: "#8C633F" }}
            />
          </>
          <Stack.Screen
            name="AddItem"
            component={AddItem}
            options={{
              headerTitle: "Add your craft",
              headerTintColor: "#8C633F",
            }}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={({ navigation }) => ({
              headerTitle: "Your favorites",
              headerTintColor: "#8C633F",
            })}
          />
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar
          barStyle={`${statusColor}`}
          backgroundColor={`${headerColor}`}
        />
      </Authprovider>
    </NavigationContainer>
  );
}
