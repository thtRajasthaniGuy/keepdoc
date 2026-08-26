import { View, Text, Pressable } from "react-native";
import { Header } from "../../components/header";
import { Search } from "../../components/search/search";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useTheme } from "../../theme/ThemeProvider";
import { DashboardStyles } from "./styles";
import { DocCard } from "../../components/docCard";

export const Dashboard = () => {
  const { theme } = useTheme();
  const styles = DashboardStyles(theme);
  return (
    <View style={styles.container}>
      <Header title="KeepDoc" />
      <Search
        changeText={(e) => {
          console.log(e);
        }}
      />

      <View style={styles.allView}>
        <Text style={styles.recentDocText}>Recent Documents</Text>

        <Pressable
          style={styles.viewAllBtn}
          onPress={() => {
            console.log("View all");
          }}
        >
          <Text style={styles.viewAllText}>View all</Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color={theme.colors.primary}
          />
        </Pressable>
      </View>

      <DocCard />
    </View>
  );
};
