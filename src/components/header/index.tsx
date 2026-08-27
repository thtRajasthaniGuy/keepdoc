import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@react-native-vector-icons/ionicons/static";

import { useTheme } from "../../theme/ThemeProvider";
import { HeaderStyles } from "./header.styles";

interface Props {
  title: string;
  onSettingsPress?: () => void;
}

export const Header = ({ title, onSettingsPress }: Props) => {
  const { theme } = useTheme();
  const styles = HeaderStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>

      {/* <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          pressed && styles.iconButtonPressed,
        ]}
        onPress={onSettingsPress}
        hitSlop={10}
        android_ripple={{
          color: theme.colors.primary,
          borderless: true,
        }}
      >
        <Ionicons
          name="settings-outline"
          size={22}
          color={theme.colors.primary}
        />
      </Pressable> */}
    </View>
  );
};
