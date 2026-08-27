import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

export const EmptyDocuments = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../assets/empty.json")}
        autoPlay
        loop
        style={styles.animation}
      />

      <Text style={styles.title}>No documents yet</Text>

      <Text style={styles.description}>
        Your saved documents will appear here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  animation: {
    width: 180,
    height: 180,
  },

  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
  },

  description: {
    marginTop: 6,
    fontSize: 14,
    textAlign: "center",
    color: "#777",
  },
});
