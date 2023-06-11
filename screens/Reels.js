import * as React from "react";
import { Dimensions, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Reel from "../components/Reel/Reel";
import { ReelCollections } from "../constant/data";
import SwiperFlatList from "react-native-swiper-flatlist";

const Reels = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SwiperFlatList
        data={ReelCollections}
        vertical={true}
        renderItem={({ item, index }) => (
          <Reel reelItem={item.reels_videos} index={index} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Reels;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "black",
  },
});
