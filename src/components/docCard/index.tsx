import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, Pressable } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { DocCardStyles } from "./styles";
import { getDocumentStyle } from "../../constants/document";
import { formatDocumentDate } from "../../utils/date";

interface props {
  docName: string;
  docType: string;
  date: string;
  docStatus: string;
  onPress: () => void;
}

export const DocCard = ({
  docName,
  docType,
  date,
  docStatus,
  onPress,
}: props) => {
  const { theme } = useTheme();
  const styles = DocCardStyles(theme);
  const { document, status } = getDocumentStyle(docType, docStatus);
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={document.icon} size={28} color={document.color} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {docName}
        </Text>

        <View style={styles.metaRow}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{docType}</Text>
          </View>

          <Text style={styles.date}>{formatDocumentDate(date)}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Pressable style={styles.menuButton}>
          <Ionicons name={status.icon} size={16} color={status.color} />
        </Pressable>

        {/* <Text style={styles.status}>{status}</Text> */}
      </View>
    </Pressable>
  );
};
