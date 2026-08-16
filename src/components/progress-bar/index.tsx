import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../theme/ThemeProvider";
import { ProgressBarStyles } from "./styles";

interface ProgressBarProps {
  progress: number;
  text: string;
}

export const ProgressBar = ({ progress, text }: ProgressBarProps) => {
  const { theme } = useTheme();
  const styles = ProgressBarStyles(theme);
  const progressValue = useSharedValue(0);

  useEffect(() => {
    progressValue.value = withTiming(progress, {
      duration: 500,
    });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progressValue.value}%`,
  }));

  return (
    <View style={styles.container}>
      {/* Progress bar */}
      <View style={styles.track}>
        <Animated.View style={[styles.progress, animatedStyle]} />
      </View>

      {/* Label + percentage */}
      <View style={styles.info}>
        <Text style={styles.label}>{text}</Text>

        <Text style={styles.percentage}>{Math.round(progress)}%</Text>
      </View>
    </View>
  );
};
