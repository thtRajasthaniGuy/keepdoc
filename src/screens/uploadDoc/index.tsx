import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  withSpring,
  Easing,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useTheme } from "../../theme/ThemeProvider";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { UploadDocumentStyles } from "./styles";

type ProcessingState = "processing" | "done";

const AiProcessingIndicator = ({ state }: { state: ProcessingState }) => {
  const { theme } = useTheme();
  const styles = UploadDocumentStyles(theme);

  const rotation = useSharedValue(0);
  const counterRotation = useSharedValue(0);
  const pulse = useSharedValue(1);
  const checkScale = useSharedValue(0);
  const ringColorProgress = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 2200, easing: Easing.linear }),
      -1,
    );
    counterRotation.value = withRepeat(
      withTiming(-360, { duration: 3400, easing: Easing.linear }),
      -1,
    );
    pulse.value = withRepeat(
      withSequence(
        withTiming(1.08, { duration: 700, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 700, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
    );
  }, []);

  useEffect(() => {
    if (state === "done") {
      ringColorProgress.value = withTiming(1, { duration: 400 });
      checkScale.value = withSpring(1, { damping: 9, stiffness: 140 });
    }
  }, [state]);

  const outerRingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
    borderTopColor:
      ringColorProgress.value === 1
        ? theme.colors.success
        : theme.colors.primary,
  }));

  const innerRingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${counterRotation.value}deg` }],
  }));

  const iconWrapStyle = useAnimatedStyle(() => ({
    transform: [{ scale: state === "processing" ? pulse.value : 1 }],
    opacity: state === "processing" ? 1 : 0,
  }));

  const checkStyle = useAnimatedStyle(() => ({
    transform: [{ scale: checkScale.value }],
    opacity: checkScale.value,
  }));

  return (
    <View style={styles.indicatorWrap}>
      <Animated.View style={[styles.outerRing, outerRingStyle]} />
      <Animated.View style={[styles.innerRing, innerRingStyle]} />

      <Animated.View style={[styles.centerIcon, iconWrapStyle]}>
        <Ionicons
          name="document-text-outline"
          size={34}
          color={theme.colors.primary}
        />
      </Animated.View>

      <Animated.View style={[styles.centerIcon, checkStyle]}>
        <Ionicons name="checkmark" size={38} color={theme.colors.success} />
      </Animated.View>
    </View>
  );
};

export const UploadDocument = () => {
  const { theme } = useTheme();
  const styles = UploadDocumentStyles(theme);
  const navigation = useNavigation();

  const [state, setState] = useState<ProcessingState>("processing");

  useEffect(() => {
    const timer = setTimeout(() => setState("done"), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="KeepDoc"
        showBackButton
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <AiProcessingIndicator state={state} />

        <Text style={styles.statusTitle}>
          {state === "processing" ? "Reading your document" : "Saved"}
        </Text>
        <Text style={styles.statusSubtitle}>
          {state === "processing"
            ? "AI is reading and organizing your file, entirely on your phone."
            : "Your document is safe on your device — nothing left it."}
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          text={state === "processing" ? "Processing…" : "Done"}
          disable={state === "processing"}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};
