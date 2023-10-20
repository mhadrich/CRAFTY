import { View, Text } from 'react-native';
import React from 'react';
import ProdCard from '../components/ProdCard';

const Favorites = () => {
  return (
    <View className="flex flex-row justify-items justify-center ">
    <ProdCard/>
    <ProdCard/>
    </View>
  )
}

export default Favorites