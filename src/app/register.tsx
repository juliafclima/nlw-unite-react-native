import { View, Image, StatusBar, StyleSheet } from "react-native";
import { Link } from "expo-router";

import { colors } from "@/styles/colors";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Register() {
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
          icon="account-circle-outline"
          placeholder="Nome completo"
          placeholderTextColor={colors.gray[200]}
        />

        <Input
          icon="email-open-outline"
          placeholder="Email"
          placeholderTextColor={colors.gray[200]}
          keyboardType="email-address"
        />

        <Button title="Realizar inscrição" />

        <Link style={styles.link} href="/">
          Já possui ingresso
        </Link>
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

  link: {
    color: colors.green[200],
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
