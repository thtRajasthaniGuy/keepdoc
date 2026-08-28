import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const SwapStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: 48,
      height: 28,
      borderRadius: 14,
      padding: 3,
      justifyContent: "center",
    },

    activeContainer: {
      backgroundColor: theme.colors.primary,
    },

    inactiveContainer: {
      backgroundColor: theme.colors.secondary,
    },

    thumb: {
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: "#FFFFFF",
    },
  });
