import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Karousel({data}) {
   
  // const Images = [
  //   {
  //     uri: "https://i.etsystatic.com/40226929/r/il/7c0bac/4711971257/il_794xN.4711971257_l2e1.jpg",
  //     text: "Gift Ideas for her",
  //   },
  //   {
  //     uri: "https://i.etsystatic.com/40226929/r/il/c562f2/4711983671/il_794xN.4711983671_i0tp.jpg",
  //     text: "Gift Ideas for him",
  //   },
  //   {
  //     uri: "https://i.etsystatic.com/40226929/r/il/8b4f27/4711984039/il_794xN.4711984039_8w7g.jpg",
  //     text: "Making Christmas Merrier",
  //   },
  //   {
  //     uri: "https://i.etsystatic.com/40226929/r/il/cf677c/4663739596/il_794xN.4663739596_quva.jpg",
  //     text: "Up your decor game",
  //   },
  // ];
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width}
        autoPlay={true}
        data={data}
        autoPlayInterval={5000}
        scrollAnimationDuration={2000}
        renderItem={({ item }) => (
          <View className="flex-1">
            <Image source={{ uri: item.url }} className="flex-1" />
            <View className="absolute top-3/4 bottom-0 left-0 right-0 justify-center items-center">
              <LinearGradient
                pointerEvents="none"
                colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
                className="w-screen top-4 h-28"
              />
              <Text className="text-white bottom-14 font-bold text-3xl">{item.text ?item.text :""}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default Karousel;
