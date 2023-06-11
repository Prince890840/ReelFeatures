import * as React from "react";
import { Dimensions, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ReelsList from "../components/Reel/ReelsList";

const Reels = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ReelsList />
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
