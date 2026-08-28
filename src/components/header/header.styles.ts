import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const HeaderStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 14,
    },
    leftGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
      flexShrink: 1,
    },
    rightGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    titleText: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.xxl,
      lineHeight: 40,
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
      opacity: 0.5, // was 0 — fully invisible on press felt like a bug, not feedback
    },
  });
