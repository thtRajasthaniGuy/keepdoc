import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const ProgressBarStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      padding: 30,
      marginBottom: 30,
    },

    track: {
      height: 8,
      width: "100%",
      backgroundColor: "#E5E5E5",
      borderRadius: 4,
      overflow: "hidden",
    },

    progress: {
      height: "100%",
      backgroundColor: "#000",
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
      fontSize: 14,
    },

    percentage: {
      fontSize: 14,
      fontWeight: "600",
    },
  });
