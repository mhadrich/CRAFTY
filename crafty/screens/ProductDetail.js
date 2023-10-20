import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import React, { useState, useRef } from "react";
import Karousel from "../components/Home/Carousel";
import Svg, { Path } from "react-native-svg";
import Accordion from "../components/ProdDetail/Accordion";
import ProdCard from "../components/ProdCard";
import HeartIcon from "../components/HeartIcon";
import BagIcon from "../components/BagIcon";
import { Rating } from "react-native-ratings";
import Reviews from "../components/ProdDetail/Reviews";
import BottomSheet from "react-native-simple-bottom-sheet";
import ItemReviewsList from "../components/ProdDetail/ItemReviewsList";

const ProductDetail = ({ navigation }) => {
  const [like, setLike] = useState(false);
  const panelRef = useRef(null);
  const [bsOpen, setBSOpen] = useState(false);
  return (
    <View>
      <ScrollView className="">
        <Karousel />
        <View className=" flex flex-row justify-between  p-4 items-center">
          <TouchableOpacity className="h-12 w-72 p-2 rounded-lg border-1 bg-white ">
            <View className="flex flex-row items-center justify-between">
              <Text className=""> Message seller</Text>
              <Svg className="rotate-45 mr-2 w-7 h-8" viewBox="0 0 32 32">
                <Path
                  class="cls-1"
                  d="M19.47,31a2,2,0,0,1-1.8-1.09l-4-7.57a1,1,0,0,1,1.77-.93l4,7.57L29,3.06,3,12.49l9.8,5.26,8.32-8.32a1,1,0,0,1,1.42,1.42l-8.85,8.84a1,1,0,0,1-1.17.18L2.09,14.33a2,2,0,0,1,.25-3.72L28.25,1.13a2,2,0,0,1,2.62,2.62L21.39,29.66A2,2,0,0,1,19.61,31Z"
                  fill="#101820"
                />
              </Svg>
            </View>
          </TouchableOpacity>
          <HeartIcon state={like} />
          <Pressable onPress={() => navigation.navigate("MyBag")}>
            <BagIcon />
          </Pressable>
        </View>
        <View className="flex  flex-row justify-between px-4 mt-4">
          <Text className="font-semibold text-2xl">A&C</Text>
          <Text className="font-semibold text-2xl ">$ 17.14</Text>
        </View>
        <Text className=" text-xs font-normal pl-4 text-slate-300">
          Item Name
        </Text>
        <View className="flex flex-row pl-4 pb-2">
          <Rating
            startingValue={3} //THIS TO UPDATE THE VALUES
            type="custom"
            ratingColor="#FFBA49"
            tintColor="#f4f4f4"
            ratingBackgroundColor="#d5d5d5"
            readonly={true}
            imageSize={16}
          />
          <Text className="text-neutral-400 text-xs ml-2 ">(10)</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Reviews />
          <Reviews />
          <Reviews />
        </ScrollView>

        <TouchableOpacity
          onPress={() => {
            setBSOpen(true);
          }}
        >
          <Text className=" text-center text-neutral-400 text-xs font-normal ">
            View More Reviews
          </Text>
        </TouchableOpacity>

        <View>
          <Accordion />
        </View>

        <Text className="text-lg font-medium p-4 mt-2">
          You can also like this
        </Text>
        <View className="flex flex-row mb-4 items-start justify-start">
          <ScrollView
            className="px-4"
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <ProdCard />
            <ProdCard />
            <ProdCard />
            <ProdCard />
            <ProdCard />
          </ScrollView>
        </View>
      </ScrollView>
      {bsOpen && (
        <View className="z-50 ">
          <BottomSheet
            isOpen={true}
            onClose={() => setBSOpen(false)}
            sliderMinHeight={0}
            sliderMaxHeight={650}
            ref={(ref) => (panelRef.current = ref)}
          >
            <ItemReviewsList close={setBSOpen} />
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

export default ProductDetail;
