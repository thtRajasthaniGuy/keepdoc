import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const DocumentDetailsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingBottom: 32,
    },
    imageCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      padding: 12,
      marginTop: 8,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
    },
    image: {
      width: "100%",
      height: 320,
      borderRadius: 12,
    },
    imageExpanded: {
      height: 460,
    },
    categoryChip: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      gap: 6,
      backgroundColor: theme.colors.primary + "1A", // ~10% tint of primary
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      marginTop: 24,
    },
    categoryText: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.sm,
      color: theme.colors.primary,
    },
    title: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.xxl,
      color: theme.colors.text,
      marginTop: 14,
      lineHeight: theme.fontSize.xxl + 6,
    },
    description: {
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.md,
      color: theme.colors.text,
      opacity: 0.6,
      marginTop: 8,
      lineHeight: 20,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.text,
      opacity: 0.08,
      marginVertical: 20,
    },
    infoCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      elevation: 1,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 6,
    },
    infoLabelRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    infoLabel: {
      fontFamily: theme.fonts.regular,
      fontSize: theme.fontSize.sm,
      color: theme.colors.text,
      opacity: 0.6,
    },
    infoValue: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.lg,
      color: theme.colors.text,
      marginTop: 8,
    },
    actions: {
      marginTop: 12,
      gap: 10,
    },
    shareButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      backgroundColor: theme.colors.secondary,
      paddingVertical: 14,
      borderRadius: 28,
    },
    shareButtonText: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.md,
      color: theme.colors.surface,
    },
    printButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      backgroundColor: theme.colors.text + "0D", // ~5% tint, subtle "secondary button" look
      paddingVertical: 14,
      borderRadius: 28,
    },
    printButtonText: {
      fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.md,
      color: theme.colors.text,
    },
  });
