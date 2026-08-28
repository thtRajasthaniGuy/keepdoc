import { Pressable, ActivityIndicator, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useTheme } from "../../theme/ThemeProvider";
import { IoniconName } from "../../constants/document";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type FloatingActionButtonProps = {
  onPress: () => void;
  loading?: boolean;
  icon?: IoniconName;
};

export const FloatingActionButton = ({
  onPress,
  loading = false,
  icon = "add",
}: FloatingActionButtonProps) => {
  const { theme } = useTheme();

  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.9, { damping: 12, stiffness: 220 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 10, stiffness: 180 });
  };

  const handlePress = () => {
    if (loading) return;
    rotate.value = withTiming(rotate.value + 90, { duration: 200 });
    onPress();
  };

  return (
    <AnimatedPressable
      accessibilityRole="button"
      accessibilityLabel="Upload document"
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={loading}
      style={[
        styles.fab,
        animatedStyle,
        { backgroundColor: theme.colors.primary },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.surface} size="small" />
      ) : (
        <Ionicons name={icon} size={26} color={theme.colors.surface} />
      )}
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 24,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
