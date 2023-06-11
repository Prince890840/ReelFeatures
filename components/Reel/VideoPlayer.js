import React, { useRef } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Video } from "expo-av";

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoWrapper}>
        <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          useNativeControls
          isLooping
          resizeMode="cover"
          style={styles.video}
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayer;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  videoWrapper: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
