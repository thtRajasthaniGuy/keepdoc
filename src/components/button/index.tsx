import { TouchableOpacity, Text, ViewStyle, StyleProp } from "react-native";
import { buttonStyles } from "./styles";
import { useTheme } from "../../theme/ThemeProvider";
import { Idol } from "../idol";
interface props {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
}
export const Button = ({ text, onPress, style, disable }: props) => {
  const { theme } = useTheme();
  const styles = buttonStyles(theme);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disable}
    >
      <Text style={styles.text}>{text}</Text>
      <Idol path={require("../../../assets/icons/right-Icon.png")} />
    </TouchableOpacity>
  );
};
