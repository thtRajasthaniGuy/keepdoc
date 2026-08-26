import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const DashboardStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { flex: 1 },
    allView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    recentDocText: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.md,
      color: theme.colors.secondary,
    },
    viewAllBtn: {
      flexDirection: "row",
      alignItems: "center",
    },
    viewAllText: {
      marginRight: 5,
      color: theme.colors.primary,
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.sm,
    },
  });
