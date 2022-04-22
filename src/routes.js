import React from "react";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import NewEvent from "./pages/NewEvent";
import Event from "./pages/ViewEvent";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "receipt" : "receipt";
          } else if (route.name === "Statistics") {
            iconName = focused ? "chart-pie" : "chart-pie";
          } else if (route.name === "Settings") {
            iconName = focused ? "cog" : "cog";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#1b9ff7",
        tabBarInactiveTintColor: "#555555",
        tabBarLabelStyle: {
          fontFamily: "Inter_400Regular",
          marginBottom: 10,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarStyle: {
          backgroundColor: "#222222",
          borderTopColor: "#222222",
          height: 64,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      {/*       <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarLabel: "Gráficos",
          headerShown: false,
          unmountOnBlur: true,
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Opções",
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}

function LogoTitle() {
  return <Image source={require("./assets/Logo.png")} />;
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1e1e1e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="NewEvent"
          component={NewEvent}
          options={{ headerTitle: "Novo evento" }}
        />
        <Stack.Screen
          name="Event"
          component={Event}
          options={{ headerTitle: "Evento" }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="#1e1e1e" barStyle="light-content" />
    </NavigationContainer>
  );
}
