import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { SwapStyles } from "./styles";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const AnimatedSwitch = ({ value, onChange }: Props) => {
  const { theme } = useTheme();
  const styles = SwapStyles(theme);
  const translateX = useRef(new Animated.Value(value ? 20 : 0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 20 : 0,
      useNativeDriver: true,
      bounciness: 6,
    }).start();
  }, [value, translateX]);

  const handlePress = () => {
    onChange(!value);
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          styles.container,
          value ? styles.activeContainer : styles.inactiveContainer,
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </Pressable>
  );
};
