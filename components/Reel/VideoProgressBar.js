import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

const VideoProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={progress} width={200} color="white" />
    </View>
  );
};

export default VideoProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 5,
  },
});
