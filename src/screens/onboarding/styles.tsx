import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const OnboardingStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 5,
    },
    img: { height: 342, width: 342, resizeMode: "cover" },
    title: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.xxl,
      color: theme.colors.primary,
      lineHeight: 40,
      textAlign: "center",
      marginTop: 30,
    },
    subTitle: {
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.md,
      color: theme.colors.secondary,
      lineHeight: 28,
      textAlign: "center",
      marginTop: 20,
    },
    btnView: {
      position: "absolute",
      bottom: "7%",
    },
  });
