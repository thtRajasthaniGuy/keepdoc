import { useState } from "react";
import { OnboardingFirst } from "./onboarding_first";
import { View } from "react-native";
import { OnboardingSec } from "./onboarding_sec";
import { OnboardingThird } from "./onboarding_third";
import { Button } from "../../components/button";
import { ProgressDots } from "../../components/progress-dot";
import { ProgressBar } from "../../components/progress-bar";
import { useTheme } from "../../theme/ThemeProvider";
import { OnboardingStyles } from "./styles";
import { resetTo } from "../../navigations/navigation";
import { setMMKV } from "../../utils/mmkv";

export const OnboardingScreen = () => {
  const { theme } = useTheme();
  const styles = OnboardingStyles(theme);
  const [screenIndex, setScreenIndex] = useState<number>(0);
  return (
    <View style={styles.container}>
      {screenIndex === 0 && (
        <OnboardingFirst
          title={"Your private document vault"}
          subTitle={
            "Scan any document. our AI reads and organizes it automatically, right on your phone"
          }
        />
      )}
      {screenIndex === 1 && (
        <OnboardingSec
          title={"Truly private. Fully offline"}
          subTitle={
            "Everything stays on your device. Nothing is ever uploaded to the cloud. Total peace of mind"
          }
        />
      )}
      {screenIndex === 2 && (
        <OnboardingThird
          title={"Preparing your local AI"}
          subTitle={
            "We're downloading a small (~800mb) AI model to your phone so you can process documents without an internet connection."
          }
        />
      )}
      {screenIndex === 2 ? (
        <ProgressBar progress={50} text={"Downloading model..."} />
      ) : (
        <ProgressDots currentIndex={screenIndex} />
      )}

      <View style={styles.btnView}>
        <Button
          text={screenIndex === 2 ? "Get Started" : "Next"}
          onPress={() => {
            if (screenIndex === 2) {
              //setMMKV("onboarding-complete", true);
              resetTo("Main");
              return;
            }
            setScreenIndex(screenIndex + 1);
          }}
          disable={false}
        />
      </View>
    </View>
  );
};
