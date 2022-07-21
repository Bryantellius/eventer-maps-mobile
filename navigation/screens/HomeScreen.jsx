import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" },
});
