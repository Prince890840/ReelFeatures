import React, { useState } from "react";
import Reel from "./Reel";
import SwiperFlatList from "react-native-swiper-flatlist";
import { ReelCollections } from "../../constant/data";

const ReelsList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      data={ReelCollections}
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({ item, index }) => (
        <Reel reelItem={item.reels_videos} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ReelsList;
