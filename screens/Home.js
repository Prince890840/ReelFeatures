import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Button from "../components/UI/Button";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://wallpapers.com/images/featured/a5ipk3bb2ktoeg7m.jpg",
        }}
      />
      <Button>Create a Post</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginBottom: 10,
  },
});
