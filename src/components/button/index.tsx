import { TouchableOpacity, Text, ViewStyle, StyleProp } from "react-native";
import { buttonStyles } from "./styles";
import { useTheme } from "../../theme/ThemeProvider";
import { Idol } from "../idol";
interface props {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
  hideIcon?: boolean;
}
export const Button = ({ text, onPress, style, disable, hideIcon }: props) => {
  const { theme } = useTheme();
  const styles = buttonStyles(theme);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disable}
    >
      <Text style={styles.text}>{text}</Text>
      {hideIcon && (
        <Idol path={require("../../../assets/icons/right-Icon.png")} />
      )}
    </TouchableOpacity>
  );
};
