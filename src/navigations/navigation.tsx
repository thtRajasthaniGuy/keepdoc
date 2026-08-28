import {
  createNavigationContainerRef,
  NavigationProp,
} from "@react-navigation/native";
import { RootStackParamList } from "./types";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigateTo = (
  navigation: { navigate: (screen: string, params?: object) => void },
  screen: keyof RootStackParamList,
  params?: object,
) => {
  navigation.navigate(screen as any, params as any);
};

export const resetTo = (screen: keyof RootStackParamList) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name: screen }],
    });
  }
};
