import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const ChkAmount = ({ delivery ,amount}) => {
  const [sum, setSum] = useState(0);
  useEffect(()=>{
    setSum(amount+delivery)
  },[delivery]) 
  return (
    <View>
        <View className="flex flex-row pt-6 items-center justify-between">
          <Text className="opacity-50 dark:text-white leading-tight">Order:</Text>
          <Text className="text-right font-semibold dark:text-white leading-snug">{amount}$</Text>
        </View>
        <View className="flex flex-row pt-6 items-center justify-between">
          <Text className="opacity-50 dark:text-white leading-tight">Delivery:</Text>
          <Text className="text-right dark:text-white font-semibold leading-snug">{delivery}$</Text>
        </View>
        <View className="flex flex-row pt-6 items-center justify-between">
          <Text className="opacity-50 dark:text-white font-medium text-base leading-tight">
            Total amount:
          </Text>
          <Text className="text-right dark:text-white text-lg font-semibold leading-snug">
            {sum}$
          </Text>
        </View>
      </View>
  )
}

export default ChkAmount