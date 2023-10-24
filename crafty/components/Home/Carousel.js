import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Karousel({ data }) {
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
        mode="parallax"
        renderItem={({ item }) => (
          <View className="flex-1">
            <Image
              source={{ uri: item.url ? item.url : item.coverImage }}
              className="flex-1"
            />
          </View>
        )}
      />
    </View>
  );
}

export default Karousel;
