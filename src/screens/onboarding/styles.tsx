import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../theme/theme";

const { width } = Dimensions.get("window");
const IMAGE_SIZE = Math.min(width * 0.8, 342); // scales down on small screens, caps at 342

export const OnboardingStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 24,
      justifyContent: "space-between", // top content vs bottom section
    },
    contentWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      resizeMode: "contain",
    },
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
      lineHeight: 26,
      textAlign: "center",
      marginTop: 12,
    },
    bottomSection: {
      paddingBottom: 24,
    },
    btnView: {
      marginTop: 24,
    },
  });
