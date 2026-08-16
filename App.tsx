import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OnboardingScreen } from "./src/screens/onboarding";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [fontsLoaded] = useFonts({
    QuickSandRegular: require("./assets/fonts/Quicksand-Regular-400.ttf"),
    QuickSandMedium: require("./assets/fonts/Quicksand-Medium-500.ttf"),
    QuickSandLight: require("./assets/fonts/Quicksand-Light-300.ttf"),
    QuickSandBold: require("./assets/fonts/Quicksand-Bold-700.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <OnboardingScreen />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
