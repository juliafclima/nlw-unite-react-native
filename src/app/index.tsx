import { View, Image, StatusBar, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Image
        source={require("@/assets/logo.png")}
        style={styles.photo}
        resizeMode="contain"
      />

      <View style={styles.inputAcesso}>
        <Input
          icon="ticket-confirmation-outline"
          placeholder="Código do ingresso"
          placeholderTextColor={colors.gray[200]}
        />

        <Button title="Acessar credencial" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green[400],
    alignItems: "center",
    justifyContent: "center",
  },

  photo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  inputAcesso: {
    width: "80%",
  },
});
