import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const HeaderStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 12,
      fontSize: theme.fontSize.xxl,
      lineHeight: theme.fontSize.xxl + 4,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      includeFontPadding: false,
    },
    titleText: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.xxl,
      color: theme.colors.primary,
    },
    iconButton: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
    iconButtonPressed: {
      opacity: 0,
    },
  });
