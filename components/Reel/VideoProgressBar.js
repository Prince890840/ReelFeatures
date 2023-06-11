import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

const VideoProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={progress}
        width={null}
        height={6}
        color="#FFFFFF"
        unfilledColor="#CCCCCC"
        borderWidth={0}
        borderRadius={0}
      />
    </View>
  );
};

export default VideoProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
