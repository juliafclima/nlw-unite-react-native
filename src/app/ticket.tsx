import { View, StyleSheet, StatusBar, Text, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";

export default function Ticket() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial" />
      {/* TEMPO DE VIDEO: 2 AULA - 34:55 */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Credential />
        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          style={styles.icon}
        />

        <Text style={styles.shared}>Compartilhar credencial</Text>

        <Text style={styles.sharedText}>
          Mostre ao mundo que você vai participar do Unite Summit!
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green[400],
    paddingBottom: 20,
  },

  icon: {
    alignSelf: "center",
    marginVertical: 6,
  },

  shared: {
    color: colors.white,
    fontWeight: "bold",
    marginTop: 4,
  },

  sharedText: {
    color: colors.white,
    marginTop: 1,
    marginBottom: 6,
  },
});
