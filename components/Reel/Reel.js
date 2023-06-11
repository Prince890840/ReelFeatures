import React from "react";
import { StyleSheet, View } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import VideoPlayer from "./VideoPlayer";

const Reel = ({ reelItem }) => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        data={reelItem}
        horizontal={true}
        renderItem={({ item }) => <VideoPlayer videoUrl={item.video.url} />}
        keyExtractor={(item) => item.video.url}
      />
    </View>
  );
};

export default Reel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
