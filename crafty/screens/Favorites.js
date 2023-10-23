import { View,Text } from 'react-native';
import React, { useEffect, useState } from "react";
import ProdCard from '../components/ProdCard';
import { useAuth } from "../components/Authprovider/Authprovider";
import axios from 'axios';
import ADRESS_API from "../Api"

const Favorites = ({navigation}) => {
  const { authState ,fav } = useAuth();
  
  const [data, setData] = useState([]); 
  console.log(fav,"helloooo");
 

  // useEffect(() => {
  //   console.log("🚀 ~ file: Favorites.js:10 ~ Favorites ~  authState :",  fav )
  // }, [fav]);

  return (
    <View className="flex flex-col justify-items justify-center">
     
      {console.log("🚀 ~ file: Favorites.js:23 ~ Favorites ~ authState:", fav)}
      {fav && fav.length >0 ? (
        fav.map((item, key) => (
          <ProdCard navigation={navigation} data={item.item} key={key} />
        ))
      ) : (
        <Text>No favorites found</Text>
      )}
    </View>
  )
}

export default Favorites;