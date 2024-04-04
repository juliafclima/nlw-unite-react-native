import { colors } from "@/styles/colors";
import { ActivityIndicator, StyleSheet } from "react-native";

export function Loading() {
  return <ActivityIndicator style={styles.loading} />;
}

const styles = StyleSheet.create({
  loading: {
    marginTop: 10,
  },
});
