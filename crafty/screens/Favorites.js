import { View,Text } from 'react-native';
import React, { useEffect, useState } from "react";
import ProdCard from '../components/ProdCard';
import { useAuth } from "../components/Authprovider/Authprovider";
import axios from 'axios';
import ADRESS_API from "../Api"

const Favorites = () => {
  const { authState } = useAuth();
  const [data, setData] = useState([]); // Initialize data as an empty array

  const GetFavorite = async () => {
    const id = authState.userId;
    try {
      const res = await axios.get(`http://${ADRESS_API}:4000/favourite/getfavourite/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error fetching favorites:", error);
      return []; 
    }
  }

  useEffect(() => {
    const getFavorites = async () => {
      const favorites = await GetFavorite();
      setData(favorites)
    }
    getFavorites();
  }, []);

  return (
    <View className="flex flex-row justify-items justify-center">
      {data.length > 0 ? (
        data.map((item, key) => (
          <ProdCard data={item} key={key} />
        ))
      ) : (
        <Text>No favorites found</Text>
      )}
    </View>
  )
}

export default Favorites;