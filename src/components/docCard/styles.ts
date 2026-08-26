import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const DocCardStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      marginHorizontal: 20,
      marginVertical: 6,
      padding: 14,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 2,
    },

    iconContainer: {
      width: 52,
      height: 52,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#EEF2FF",
    },

    content: {
      flex: 1,
      marginLeft: 14,
      marginRight: 10,
    },

    title: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.lg,
      color: theme.colors.text,
      marginBottom: 7,
    },

    metaRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    chip: {
      paddingHorizontal: 9,
      paddingVertical: 4,
      borderRadius: 8,
      backgroundColor: "#F1F5F9",
    },

    chipText: {
      fontFamily: theme.fonts.bold,
      fontSize: theme.fontSize.sm,
      color: theme.colors.text,
    },

    date: {
      marginLeft: 8,
      fontSize: 12,
      color: "#888",
    },

    rightSection: {
      alignItems: "flex-end",
      justifyContent: "center",
    },

    menuButton: {
      width: 32,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
    },

    status: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.xs,
      color: theme.colors.text,
      marginTop: 2,
    },
  });
