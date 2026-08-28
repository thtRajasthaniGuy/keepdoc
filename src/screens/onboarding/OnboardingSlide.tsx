import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { OnboardingStyles } from "./styles";

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

export const OnboardingSlide = ({ title, subTitle, image }: Props) => {
  const { theme } = useTheme();
  const styles = OnboardingStyles(theme);
  return (
    <View style={{ alignItems: "center" }}>
      <Image style={styles.img} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};
