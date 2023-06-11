import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#3e04c3",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  flatText: {
    color: "#a281f0",
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
    backgroundColor: "#c6affc",
  },
});
