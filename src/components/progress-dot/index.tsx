import { View } from "react-native";
import { ProgressDot } from "./ProgressDot";

export const ProgressDots = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
      }}
    >
      {[0, 1, 2].map((index) => (
        <ProgressDot key={index} active={index === currentIndex} />
      ))}
    </View>
  );
};
