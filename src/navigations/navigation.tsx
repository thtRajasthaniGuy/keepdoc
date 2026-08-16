import {
  createNavigationContainerRef,
  NavigationProp,
} from "@react-navigation/native";
import { RootStackParamList } from "./types";
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
export const navigateTo = <T extends keyof RootStackParamList>(
  navigation: NavigationProp<RootStackParamList>,
  screen: keyof RootStackParamList,
) => {
  navigation.navigate(screen);
};

export const resetTo = (screen: keyof RootStackParamList) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name: screen }],
    });
  }
};
