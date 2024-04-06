import { View, Image, StatusBar, StyleSheet, Alert } from "react-native";
import { Link, router } from "expo-router";

import { colors } from "@/styles/colors";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleRegister() {
    if (!nome.trim() || !email.trim()) {
      return Alert.alert("Inscrição", "Preencha todos os campos!");
    }

    if (!validarEmail(email)) {
      return Alert.alert("Inscrição", "O email inserido não é válido!");
    }

    router.push("/ticket");
  }

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
          onChangeText={setNome}
        />

        <Input
          icon="email-open-outline"
          placeholder="Email"
          placeholderTextColor={colors.gray[200]}
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <Button title="Realizar inscrição" onPress={handleRegister} />

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
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
