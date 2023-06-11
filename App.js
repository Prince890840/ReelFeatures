import { StatusBar } from "expo-status-bar";

// Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// screens
import Home from "./screens/Home";
import Reels from "./screens/Reels";

// others
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Reels"
            component={Reels}
            options={{
              title: "Reels",
              headerShown: false,
              tabBarLabel: "Reels",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="videocam" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
