import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { DocCardStyles } from "./styles";

export const DocCard = () => {
  const { theme } = useTheme();
  const styles = DocCardStyles(theme);
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="document-text-outline" size={28} color="#4F46E5" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          Medical Report
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Medical</Text>
          </View>

          <Text style={styles.date}>Today</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Pressable style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical" size={20} color="#666" />
        </Pressable>

        <Text style={styles.status}>Saved</Text>
      </View>
    </View>
  );
};
