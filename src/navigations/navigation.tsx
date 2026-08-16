import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "./types";

export const navigateTo = <T extends keyof RootStackParamList>(
  navigation: NavigationProp<RootStackParamList>,
  screen: keyof RootStackParamList,
) => {
  navigation.navigate(screen);
};

export const resetTo = <T extends keyof RootStackParamList>(
  navigation: NavigationProp<RootStackParamList>,
  screen: T,
) => {
  navigation.reset({
    index: 0,
    routes: [{ name: screen }],
  });
};
