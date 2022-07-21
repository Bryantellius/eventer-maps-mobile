import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsScreen } from "../screens/SettingsScreen";
import { HomeTabs } from "../tabs/HomeTabs";
import { Icon } from "@rneui/themed";

const Stack = createNativeStackNavigator();

const HeaderRightSettingsIcon = (navigation) => {
  return (
    <Icon name="settings" onPress={() => navigation.navigate("Settings")} />
  );
};

const screenOptions = ({ navigation}) => ({
  headerRight: () => HeaderRightSettingsIcon(navigation),
});

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="App"
        component={HomeTabs}
        options={{ title: "Eventer" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
};
