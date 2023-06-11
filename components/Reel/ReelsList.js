import React from "react";
import Reel from "./Reel";
import SwiperFlatList from "react-native-swiper-flatlist";
import { ReelCollections } from "../../constant/data";

const ReelsList = () => {
  return (
    <SwiperFlatList
      data={ReelCollections}
      vertical={true}
      renderItem={({ item, index }) => (
        <Reel reelItem={item.reels_videos} index={index} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ReelsList;
