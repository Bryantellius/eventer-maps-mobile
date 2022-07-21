import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";

const testMarkers = [
  {
    coordinates: {
      latitude: 40.71427,
      longitude: -74.00597,
    },
    title: "New York City",
    description: "Population",
  },
  {
    coordinates: {
      latitude: 34.05223,
      longitude: -118.24368,
    },
    title: "Los Angeles",
    description: "Population",
  },
  {
    coordinates: {
      latitude: 33.52066,
      longitude: -86.80249,
    },
    title: "Birmingham",
    description: "Population",
  },
];

export const MapScreen = () => {
  let [region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  return (
    <View style={styles.screen}>
      <MapView
        region={region}
        onRegionChange={onRegionChange}
        style={styles.map}
      >
        {testMarkers.map(
          (
            { coordinates: { latitude, longitude }, title, description },
            index
          ) => {
            return (
              <Marker
                key={index}
                coordinate={{ latitude, longitude }}
                title={title}
                description={description}
              >
                <Icon name="room" color={"orange"} />
              </Marker>
            );
          }
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center", justifyContent: "center" },
  map: { width: "100%", height: "100%" },
});
