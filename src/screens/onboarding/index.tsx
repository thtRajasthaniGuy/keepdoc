import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingSlide } from "./OnboardingSlide";
import { Button } from "../../components/button";
import { ProgressDots } from "../../components/progress-dot";
import { ProgressBar } from "../../components/progress-bar";
import { useTheme } from "../../theme/ThemeProvider";
import { OnboardingStyles } from "./styles";
import { resetTo } from "../../navigations/navigation";
import { setMMKV } from "../../utils/mmkv";

const SLIDES = [
  {
    image: require("../../../assets/icons/onboarding-first.png"),
    title: "Your private document vault.",
    subTitle:
      "Scan any document. Our AI reads and organizes it automatically, right on your phone.",
  },
  {
    image: require("../../../assets/icons/onboarding-sec.png"),
    title: "Truly private. Fully offline.",
    subTitle:
      "Everything stays on your device. Nothing is ever uploaded to the cloud. Total peace of mind.",
  },
  {
    image: require("../../../assets/icons/onboarding-third.png"),
    title: "Preparing your local AI.",
    subTitle:
      "We're downloading a small (~800MB) AI model to your phone so you can process documents without an internet connection.",
  },
];

export const OnboardingScreen = () => {
  const { theme } = useTheme();
  const styles = OnboardingStyles(theme);
  const [screenIndex, setScreenIndex] = useState<number>(0);
  const isLast = screenIndex === SLIDES.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <OnboardingSlide {...SLIDES[screenIndex]} />
      </View>

      <View style={styles.bottomSection}>
        {isLast ? (
          <ProgressBar progress={45} text={"Downloading model..."} />
        ) : (
          <View style={{ alignItems: "center" }}>
            <ProgressDots currentIndex={screenIndex} />
          </View>
        )}
        <View style={styles.btnView}>
          <Button
            text={isLast ? "Get Started" : "Next"}
            onPress={() => {
              if (isLast) {
                resetTo("Main");
                setMMKV("onboarding-complete", true);
                return;
              }
              setScreenIndex(screenIndex + 1);
            }}
            disable={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
