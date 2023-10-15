import { View, Text } from 'react-native';
import React from 'react';

const ReviewData = [
  {
    StarsNumber: '****',
    Description:
    'Absolutely beautiful! I gifted this for a wedding shower and they loved it !',
  }
];

const Reviews = () => {
  return (
    <View>
      {ReviewData.map((data, index) => (
        <View key={index} className="w-60 h-24 bg-white ml-2 mt-4 mb-2 rounded-sm justify-center justify-items">
          <Text className="text-yellow-500 ml-1">{data.StarsNumber}</Text>
          <Text className="text-xs font-normal ">{data.Description}</Text>
        </View>
      ))}
    </View>
  );
};

export default Reviews;
