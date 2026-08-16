import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const buttonStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 10,
      borderRadius: 30,
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
      minWidth: "70%",
      flexDirection: "row",
    },
    text: {
      color: theme.colors.surface,
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.md,
    },
  });
