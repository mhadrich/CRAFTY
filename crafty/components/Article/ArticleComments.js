import { View, Text, Image } from "react-native";
import React from "react";
import ArtComCard from "./ArtComCard";

const ArticleComments = () => {
  return (
    <View>
      <Text className="text-2xl mb-8 font-semibold leading-snug">8 Comments</Text>
      <ArtComCard />
      <ArtComCard />
      <ArtComCard />
      <ArtComCard />
      <ArtComCard />
    </View>
  );
};

export default ArticleComments;
