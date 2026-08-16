import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../theme/ThemeProvider";

interface ProgressDotProps {
  active: boolean;
}

export const ProgressDot = ({ active }: ProgressDotProps) => {
  const { theme } = useTheme();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(active ? 24 : 8, {
        duration: 300,
      }),
      opacity: withTiming(active ? 1 : 0.5, {
        duration: 300,
      }),
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: 8,
          borderRadius: 4,
          backgroundColor: theme.colors.primary,
        },
        animatedStyle,
      ]}
    />
  );
};
