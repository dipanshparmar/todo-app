import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

// importing components
import Header from "./components/Header";
import AddItem from "./components/AddItem";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
