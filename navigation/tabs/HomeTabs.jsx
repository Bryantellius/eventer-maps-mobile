import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { MapScreen } from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Map":
              iconName = "map";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};
