import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const SettingsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    subContainer: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 20,
    },
    settingCardHeaderText: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.lg,
      color: theme.colors.text,
      marginTop: 20,
      marginBottom: 10,
    },

    privacyCard: {
      width: "100%",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: 14,
      borderRadius: 15,
      overflow: "hidden",
    },

    iconContainer: {
      width: 42,
      height: 42,
      borderRadius: 21,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
    },

    content: {
      flex: 1,
      minWidth: 0,
      marginLeft: 12,
    },
    title: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.lg,
      color: theme.colors.text,
      lineHeight: 21,
      flexShrink: 1,
    },
    description: {
      marginTop: 4,
      fontFamily: theme.fonts.light,
      fontSize: theme.fontSize.sm,
      color: theme.colors.text,
      lineHeight: 18,
      flexShrink: 1,
    },
    profileCard: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      padding: 14,
      borderRadius: 16,
      marginTop: 16,
      // subtle elevation, works on both platforms
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 6,
      elevation: 2,
    },

    profileAvatar: {
      width: 46,
      height: 46,
      borderRadius: 23,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
    },

    profileInitials: {
      fontSize: 18,
    },

    profileTextWrap: {
      flex: 1,
      marginLeft: 12,
      minWidth: 0,
    },

    profileName: {
      fontSize: theme.fontSize.lg,
      lineHeight: 20,
    },

    profileRole: {
      fontSize: theme.fontSize.sm,
      marginTop: 2,
      opacity: 0.65,
    },

    portfolioBtn: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
      gap: 6,
    },

    portfolioBtnText: {
      fontSize: theme.fontSize.sm,
    },
  });
