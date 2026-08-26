import { View, TextInput } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { SearchStyles } from "./styles";
import Ionicons from "@react-native-vector-icons/ionicons";

interface props {
  changeText: (e: string) => void;
}

export const Search = ({ changeText }: props) => {
  const { theme } = useTheme();
  const styles = SearchStyles(theme);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Ionicons
          name="search-outline"
          size={22}
          color={theme.colors.primary}
        />

        <TextInput
          style={styles.textInputContainer}
          placeholder="Search your vault..."
          placeholderTextColor={theme.colors.primary}
          onChangeText={changeText}
        />
      </View>
    </View>
  );
};
