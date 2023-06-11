import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import VideoPlayer from "./VideoPlayer";
import VideoProgressBar from "./VideoProgressBar";

const Reel = ({ reelItem }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (playbackStatus) {
      const { positionMillis, durationMillis } = playbackStatus;
      const currentProgress = positionMillis / durationMillis;
      setProgress(currentProgress);
    }
  }, [playbackStatus]);

  const onPlaybackStatusUpdate = (status) => {
    setPlaybackStatus(status);
  };

  const handleVideoFinished = () => {
    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < reelItem.length ? nextIndex : 0;
    });
  };

  const onIndexChanged = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.reelContainer}>
        {reelItem.map((reel, index) => (
          <View key={`${reel.id}_${index}`} style={styles.progressBarContainer}>
            <VideoProgressBar
              progress={
                index === currentVideoIndex
                  ? progress
                  : index < currentVideoIndex
                  ? 1
                  : 0
              }
            />
          </View>
        ))}
      </View>
      <SwiperFlatList
        data={reelItem}
        horizontal={true}
        showsHorizontalScrollIndicator
        onIndexChanged={onIndexChanged}
        renderItem={({ item }) => (
          <View>
            <VideoPlayer
              videoUrl={item.video.url}
              onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            />
          </View>
        )}
        keyExtractor={(item) => item.video.url}
        onMomentumScrollEnd={handleVideoFinished}
      />
    </View>
  );
};

export default Reel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reelContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressBarContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});
