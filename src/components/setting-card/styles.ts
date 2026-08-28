import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const SettingCardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      minHeight: 72,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderRadius: 16,
      marginVertical: 10,
    },
    leftIconContainer: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 12,
    },
    content: {
      flex: 1,
      minWidth: 0,
      justifyContent: "center",
      marginRight: 8,
    },
    title: {
      color: theme.colors.primary,
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.sm,
      lineHeight: 21,
    },
    description: {
      marginTop: 3,
      color: theme.colors.primary,
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.sm,
      lineHeight: 18,
    },
    rightContainer: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
  });
