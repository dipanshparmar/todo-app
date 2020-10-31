import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>todo app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8DD7CF",
  },
  text: {
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 20,
    color: "#2A3B47",
  },
});

export default Header;
