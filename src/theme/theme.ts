// src/theme/theme.ts

export const lightTheme = {
  colors: {
    primary: "#2d5a5e",
    secondary: "#404849",
    tertiary: "#d97706",
    background: "##F9F8F6",
    surface: "#F8FAFC",

    text: "#0F172A",

    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
  },

  fonts: {
    regular: "QuickSandRegular",
    medium: "QuickSandMedium",
    light: "QuickSandLight",
    bold: "QuickSandBold",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    round: 999,
  },

  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
};

export const darkTheme = {
  ...lightTheme,

  colors: {
    ...lightTheme.colors,

    primary: "#2d5a5e",
    secondary: "#e8e4df",
    tertiary: "#d97706",
    background: "#F9F8F6",
    surface: "#F8FAFC",

    text: "#0F172A",

    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
  },
  fonts: {
    regular: "QuickSandRegular",
    medium: "QuickSandMedium",
    light: "QuickSandLight",
    bold: "QuickSandBold",
  },
};

export type Theme = typeof lightTheme;
