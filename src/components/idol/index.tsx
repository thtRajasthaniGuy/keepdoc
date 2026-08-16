import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { IdolStyles } from "./styles";

interface props {
  path: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

export const Idol = ({ path, style }: props) => {
  const { theme } = useTheme();
  const styles = IdolStyles(theme);
  return <Image source={path} style={[styles.container, style]} />;
};
