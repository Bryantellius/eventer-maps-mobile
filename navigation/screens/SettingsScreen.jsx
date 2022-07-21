import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" },
});
