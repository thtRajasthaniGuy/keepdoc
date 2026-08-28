import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, StyleSheet } from "react-native";

import { useTheme } from "../../theme/ThemeProvider";
import { AnimatedSwitch } from "../swap";
import { IoniconName } from "../../constants/document";
import { SettingCardStyles } from "./styles";
import { useState } from "react";

interface Props {
  leftIcon: IoniconName;
  title: string;
  desc: string;
  rightIcon?: IoniconName;
  swap?: boolean;
}

export const SettingCard = ({
  leftIcon,
  title,
  desc,
  rightIcon,
  swap = false,
}: Props) => {
  const { theme } = useTheme();
  const styles = SettingCardStyles(theme);
  const [swapChange, setSwapChange] = useState<boolean>(false);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
        },
      ]}
    >
      <View style={styles.leftIconContainer}>
        <Ionicons name={leftIcon} size={22} color={theme.colors.primary} />
      </View>

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            {
              color: theme.colors.text,
              fontFamily: theme.fonts.medium,
            },
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.description,
            {
              color: theme.colors.secondary,
              fontFamily: theme.fonts.regular,
            },
          ]}
          numberOfLines={2}
        >
          {desc}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        {swap ? (
          <AnimatedSwitch
            value={swapChange}
            onChange={() => {
              setSwapChange(!swapChange);
            }}
          />
        ) : (
          <Ionicons
            name={rightIcon ?? "chevron-forward-outline"}
            size={22}
            color={theme.colors.primary}
          />
        )}
      </View>
    </View>
  );
};
