import React, { useEffect, useRef } from "react";
import { View, Text, Pressable, Animated } from "react-native";
import { Ionicons } from "@react-native-vector-icons/ionicons/static";

import { useTheme } from "../../theme/ThemeProvider";
import { HeaderStyles } from "./header.styles";
import { IoniconName } from "../../constants/document";

export type HeaderAction = {
  icon: IoniconName;
  onPress: () => void;
  accessibilityLabel?: string;
};

interface Props {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightActions?: HeaderAction[]; // parent controls what shows up, up to 2
}

export const Header = ({
  title,
  showBackButton = false,
  onBackPress,
  rightActions = [],
}: Props) => {
  const { theme } = useTheme();
  const styles = HeaderStyles(theme);

  const backOpacity = useRef(new Animated.Value(0)).current;
  const backTranslate = useRef(new Animated.Value(-6)).current;

  useEffect(() => {
    if (!showBackButton) return;
    Animated.parallel([
      Animated.timing(backOpacity, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(backTranslate, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();
  }, [showBackButton]);

  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        {showBackButton && (
          <Animated.View
            style={{
              opacity: backOpacity,
              transform: [{ translateX: backTranslate }],
            }}
          >
            <Pressable
              style={({ pressed }) => [
                styles.iconButton,
                pressed && styles.iconButtonPressed,
              ]}
              onPress={onBackPress}
              hitSlop={10}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={theme.colors.primary}
              />
            </Pressable>
          </Animated.View>
        )}

        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {rightActions.length > 0 && (
        <View style={styles.rightGroup}>
          {rightActions.slice(0, 2).map((action, index) => (
            <Pressable
              key={action.accessibilityLabel ?? `${action.icon}-${index}`}
              style={({ pressed }) => [
                styles.iconButton,
                pressed && styles.iconButtonPressed,
              ]}
              onPress={action.onPress}
              hitSlop={10}
              accessibilityLabel={action.accessibilityLabel}
            >
              <Ionicons
                name={action.icon}
                size={24}
                color={theme.colors.primary}
              />
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};
