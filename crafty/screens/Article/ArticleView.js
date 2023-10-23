import { View, Text, Image, useColorScheme } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";
// import HeartIcon from "../../components/HeartIcon";
import BottomSheet from "react-native-simple-bottom-sheet";
import ArticleComments from "../../components/Article/ArticleComments";

const ArticleView = ({ navigation ,route}) => {
const   {article} =route.params ;
  const dark=useColorScheme();
  const [color,setColor]=useState('');
  useEffect(()=>{
    dark==="dark" ? setColor("#333333") : setColor("#ffffff")
  },[dark])
  const panelRef = useRef(null);
  const [bsOpen, setBSOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  var [val, setVal] = useState(0);

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setScrollY(y);
    if (scrollY > 700) {
      setVal(((scrollY - 700) * 2) / 100);
    } else {
      setVal(0);
    }
  };
  return (
    <View className="flex-1">
      <View
        pointerEvents="none"
        className={
          bsOpen
            ? "bg-black w-screen h-screen absolute z-20 opacity-20 transition-all"
            : "bg-black w-screen h-screen absolute z-20 opacity-0 transition-all"
        }
      ></View>
      {/* SNEAKY */}
      <View
        style={{ opacity: val }}
        className={`absolute shadow bg-[#f9f9f9] dark:bg-[#111111] w-full z-30 items-center h-28 justify-end pb-5`}
      >
        <Text className="text-[#8C633F] font-semibold text-base">
          Gifts for her
        </Text>
      </View>
      {/* SNEAKY */}
      <ScrollView onScroll={handleScroll} scrollEventThrottle={20}>
        <View className="dark:bg-[#111111] w-screen h-screen items-center justify-start">
          <Image
            style={{ opacity: scrollY > 700 ? 1 - val - 0.5 : 1 }}
            className=" w-screen h-4/5"
            src={article.coverImage}
          />

          <Text
            style={{ opacity: scrollY > 700 ? 1 - val - 0.5 : 1 }}
            className=" pt-16 text-black dark:text-white text-3xl font-bold leading-9"
          >
           {article.title}
          </Text>
          <View className="flex flex-row justify-center items-center pb-16">
            <Text
              style={{ opacity: scrollY > 700 ? 1 - val - 0.5 : 1 }}
              className=" text-[#9B9B9B] text-sm font-medium leading-tight"
            >
              {article.likes}+ likes{" "}
            </Text>
            <Svg
              style={{ opacity: scrollY > 700 ? 1 - val - 0.5 : 1 }}
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.03229 0.834961C7.06841 0.834961 6.14332 1.28366 5.53951 1.99272C4.9357 1.28366 4.0106 0.834961 3.04673 0.834961C1.34056 0.834961 0 2.17552 0 3.88169C0 5.97563 1.88343 7.6818 4.73628 10.2743L5.53951 11L6.34274 10.2687C9.19559 7.6818 11.079 5.97563 11.079 3.88169C11.079 2.17552 9.73846 0.834961 8.03229 0.834961ZM5.59466 9.44886L5.53927 9.50426L5.48387 9.44886C2.84707 7.06133 1.10766 5.48257 1.10766 3.88166C1.10766 2.77375 1.93859 1.94283 3.04649 1.94283C3.89957 1.94283 4.7305 2.49124 5.02409 3.25015H6.05998C6.34804 2.49124 7.17896 1.94283 8.03205 1.94283C9.13995 1.94283 9.97088 2.77375 9.97088 3.88166C9.97088 5.48257 8.23147 7.06133 5.59466 9.44886Z"
                fill="#9B9B9B"
              />
            </Svg>
          </View>
        </View>
        <View className="items-center dark:bg-[#111111] justify-center px-10">
          <Text className="text-black dark:text-white text-sm font-normal leading-tight">
            {article.description}
          </Text>
          <View className=" mb-8 mt-12 w-full flex flex-row justify-between">
            <View className="items-start">
              <Text className="text-black dark:text-white text-xs font-light leading-tight">
                Written by
              </Text>
              <Text className="text-black dark:text-white text-sm font-semibold leading-tight">
                Zeff
              </Text>
            </View>
            <View className=" items-end">
              <Text className="text-black dark:text-white text-xs font-light leading-tight">
                Published on
              </Text>

              <Text className="text-black dark:text-white text-sm font-semibold leading-tight">
                20/77/2077
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setBSOpen(true);
            }}
            className="scale-150 mb-16"
          >
            {/* <HeartIcon /> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
      {bsOpen && (
        <View className="z-50">
          <BottomSheet
            isOpen={true}
            wrapperStyle={{
              backgroundColor:`${color}`
            }}
            onClose={() => setBSOpen(false)}
            sliderMinHeight={0}
            sliderMaxHeight={700}
            ref={(ref) => (panelRef.current = ref)}
          >
            <ArticleComments close={setBSOpen} />
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

export default ArticleView;
