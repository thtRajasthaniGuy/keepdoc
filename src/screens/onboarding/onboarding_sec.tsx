import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { OnboardingStyles } from "./styles";

interface props {
  title: string;
  subTitle: string;
}
export const OnboardingSec = ({ title, subTitle }: props) => {
  const { theme } = useTheme();
  const styles = OnboardingStyles(theme);
  return (
    <View style={{ alignItems: "center", padding: 5, top: -10 }}>
      <Image
        style={styles.img}
        source={require("../../../assets/icons/onboarding-sec.png")}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};
