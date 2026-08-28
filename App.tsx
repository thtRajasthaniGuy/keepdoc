import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Navigation } from "./src/navigations";
import { getMMKV } from "./src/utils/mmkv";
import { navigationRef } from "./src/navigations/navigation";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { DefaultTheme } from "@react-navigation/native";
import Toast from "react-native-toast-message";
SplashScreen.setOptions({
  duration: 1500,
  fade: true,
});

export default function App() {
  const [initialState, setInitialState] = useState<any>(undefined);
  const [checkedOnboarding, setCheckedOnboarding] = useState(false);
  useEffect(() => {
    const value = getMMKV("onboarding-complete");
    if (value) {
      setInitialState({
        routes: [{ name: "Main" }],
      });
    }
    setCheckedOnboarding(true);
  }, []);
  const [fontsLoaded] = useFonts({
    QuickSandRegular: require("./assets/fonts/Quicksand-Regular-400.ttf"),
    QuickSandMedium: require("./assets/fonts/Quicksand-Medium-500.ttf"),
    QuickSandLight: require("./assets/fonts/Quicksand-Light-300.ttf"),
    QuickSandBold: require("./assets/fonts/Quicksand-Bold-700.ttf"),
  });

  if (!fontsLoaded || !checkedOnboarding) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Navigation
            theme={{
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: "#F9F8F6",
                card: "#F9F8F6",
              },
            }}
            ref={navigationRef}
            initialState={initialState}
          />

          <Toast />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
