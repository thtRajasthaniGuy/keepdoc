import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const UploadDocumentStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 32,
    },
    indicatorWrap: {
      width: 140,
      height: 140,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 28,
    },
    outerRing: {
      position: "absolute",
      width: 140,
      height: 140,
      borderRadius: 70,
      borderWidth: 3,
      borderColor: "transparent",
      borderTopColor: theme.colors.primary,
    },
    innerRing: {
      position: "absolute",
      width: 108,
      height: 108,
      borderRadius: 54,
      borderWidth: 2,
      borderColor: "transparent",
      borderTopColor: theme.colors.secondary,
      opacity: 0.5,
    },
    centerIcon: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    },
    statusTitle: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.xl,
      color: theme.colors.text,
      marginBottom: 8,
      textAlign: "center",
    },
    statusSubtitle: {
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.md,
      color: theme.colors.text,
      opacity: 0.65,
      textAlign: "center",
      lineHeight: 20,
    },
    footer: {
      paddingHorizontal: 20,
      paddingBottom: 24,
    },
  });
