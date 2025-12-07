import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SelectConcernScreen from "../screens/SelectConcernScreen";
import MyBookingsScreen from "../screens/MyBookingsScreen";
import { View, Text } from "react-native";
import { BottomTabParamList } from "./types";

const ComingSoon = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 18 }}>Coming Soon 🚧</Text>
  </View>
);

const Tab = createBottomTabNavigator<BottomTabParamList>();


export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#FFFFFF",
          elevation: 10,
        },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 8 },
        tabBarActiveTintColor: "#2E6C3E",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tab.Screen name="Home" component={SelectConcernScreen} />
      <Tab.Screen name="Consult" component={ComingSoon} />
      <Tab.Screen name="Bookings" component={MyBookingsScreen} />
      <Tab.Screen name="Profile" component={ComingSoon} />
    </Tab.Navigator>
  );
}
