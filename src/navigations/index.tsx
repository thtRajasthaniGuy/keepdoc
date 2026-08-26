import { createStaticNavigation, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "../screens/onboarding";
import { BottomTabs } from "./bottom-tabs";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Onboarding",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Onboarding: OnboardingScreen,
    Main: {
      screen: BottomTabs,
      options: {
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
