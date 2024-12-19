import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>App!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "royalblue" }}>
        Go to profile.
      </Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
