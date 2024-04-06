import { View, Image, StatusBar, StyleSheet, Alert } from "react-native";
import { Link } from "expo-router";

import { colors } from "@/styles/colors";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  function handleAcessCredetial() {
    if (!code.trim()) {
      return Alert.alert("Credencial", "Digite o código do ingresso");
    }
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
          icon="ticket-confirmation-outline"
          placeholder="Código do ingresso"
          placeholderTextColor={colors.gray[200]}
          /* onChangeText={(valor) => {
            setCode(valor);
          }} */
          onChangeText={setCode}
        />

        <Button title="Acessar credencial" onPress={handleAcessCredetial} />

        <Link style={styles.link} href="/register">
          Ainda não possui ingresso?
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
