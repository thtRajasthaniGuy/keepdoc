import { StyleSheet } from "react-native";
import { Theme } from "../../theme/theme";

export const SearchStyles = (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      height: 50,
      width: "100%",
      borderRadius: 25,
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
    },
    textInputContainer: {
      flex: 1,
      height: "100%",
      marginLeft: 10,
      paddingVertical: 0,
    },
  });
