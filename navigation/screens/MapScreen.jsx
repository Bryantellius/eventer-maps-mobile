import * as React from "react";
import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native";

export const MapScreen = () => {
  return (
    <View style={styles.screen}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" },
  map: { width: "100%", height: "100%" },
});
