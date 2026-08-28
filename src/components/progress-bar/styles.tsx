import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const ProgressBarStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 20, // was padding: 30 — now matches text width above it
      marginTop: 30,
    },

    track: {
      height: 8,
      width: "100%",
      backgroundColor: theme.colors.surface,
      borderRadius: 4,
      overflow: "hidden",
    },

    progress: {
      height: "100%",
      backgroundColor: theme.colors.primary,
      borderRadius: 4,
    },

    info: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
      width: "100%",
    },

    label: {
      fontSize: theme.fontSize.sm,
      fontFamily: theme.fonts.medium,
      color: theme.colors.secondary,
    },

    percentage: {
      fontSize: theme.fontSize.sm,
      fontFamily: theme.fonts.medium,
      color: theme.colors.primary,
    },
  });
