import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const ChkAmount = ({ delivery }) => {
  const [sum, setSum] = useState(0);
  useEffect(()=>{
    setSum(120+delivery)
  },[delivery]) 
  return (
    <View>
        <View className="flex flex-row pt-6 items-center justify-between">
          <Text className="opacity-50 leading-tight">Order:</Text>
          <Text className="text-right font-semibold leading-snug">120$</Text>
        </View>
        <View className="flex flex-row pt-6 items-center justify-between">
          <Text className="opacity-50 leading-tight">Delivery:</Text>
          <Text className="text-right font-semibold leading-snug">{delivery}$</Text>
        </View>
        <View className="flex flex-row pt-6 items-center justify-between">
          <Text className="opacity-50 font-medium text-base leading-tight">
            Total amount:
          </Text>
          <Text className="text-right text-lg font-semibold leading-snug">
            {sum}$
          </Text>
        </View>
      </View>
  )
}

export default ChkAmount