import { Text, View, StyleSheet } from "react-native";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 8,
    paddingBottom: 19,
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  text: {
    flex: 1,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
});
