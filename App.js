import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import Routes from "./src/routes";

import Home from "./src/pages/Home";
import Statistics from "./src/pages/Statistics";
import NewEvent from "./src/pages/NewEvent";

import DatabaseInit from "./src/database/init";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    new DatabaseInit();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
