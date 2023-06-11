import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ResizeMode, Video } from "expo-av";

// progressbar
import VideoProgressBar from "./VideoProgressBar";

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.playAsync().catch((error) => {
        console.log("Error playing video:", error);
        setError(true);
      });
    }
  }, [videoUrl]);

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

  if (!videoUrl || error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error loading video</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <VideoProgressBar progress={progress} />
      <TouchableOpacity style={styles.videoWrapper}>
        <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          isLooping
          resizeMode={ResizeMode.COVER}
          style={styles.video}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
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
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
    flex: 1,
  },
});
