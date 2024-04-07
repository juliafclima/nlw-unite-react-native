import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";

export default function Ticket() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Credential />
        <FontAwesome
          name="angle-double-down"
          size={24}
          color={colors.gray[300]}
          style={styles.icon}
        />

        <View style={styles.textos}>
          <Text style={styles.shared}>Compartilhar credencial</Text>

          <Text style={styles.sharedText}>
            Mostre ao mundo que você vai participar do Unite Summit!
          </Text>
        </View>

        <View style={styles.button}>
          <Button title="Compartilhar" />
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.touchableOpacity}>
          <Text style={styles.touchableOpacityText}>Remover Ingresso</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green[500],
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

  textos: {
    paddingLeft: 10,
  },

  button: {
    paddingHorizontal: 20,
  },

  touchableOpacity: {
    marginTop: 10,
  },

  touchableOpacityText: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
