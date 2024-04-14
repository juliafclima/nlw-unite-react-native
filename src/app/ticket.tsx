import { useEffect, useState } from "react";
import {
  Text,
  View,
  Modal,
  Alert,
  Linking,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Fontisto } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import QRCode from "@/components/qrcode";
import { router } from "expo-router";

export default function Ticket() {
  const [image, setImage] = useState<string>("");
  const [expendQRCode, setExpendQRCode] = useState<boolean>(false);

  useEffect(() => {
    async function getImageFromStorage() {
      try {
        const storedImage = await AsyncStorage.getItem("selectedImage");
        
        if (storedImage) {
          setImage(storedImage);
        }
      } catch (error) {
        console.warn("Erro ao obter imagem armazenada:", error);
      }
    }

    getImageFromStorage();
  }, []);

  async function handleSelectImage() {
    try {
      const imagemSelecionada = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (imagemSelecionada.assets) {
        setImage(imagemSelecionada.assets[0].uri);
        
        await AsyncStorage.setItem(
          "selectedImage",
          imagemSelecionada.assets[0].uri
        );
      }
    } catch (error) {
      console.warn(error);
      Alert.alert("Foto", "Não foi possível selecionar a imagem");
    }
  }

  const handleShareLinkedIn = async () => {
    try {
      const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        "https://github.com/juliafclima/nlw-unite-react-native"
      )}`;

      await Linking.openURL(linkedInShareUrl);
    } catch (error: any) {
      console.error("Erro ao compartilhar no LinkedIn:", error.message);
    }
  };

  const handleRemoveTicket = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Credential
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpendQRCode(true)}
        />

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
          <Button onPress={handleShareLinkedIn} title="Compartilhar" />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableOpacity}
          onPress={handleRemoveTicket}
        >
          <Text style={styles.touchableOpacityText}>Remover Ingresso</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={expendQRCode} statusBarTranslucent animationType="slide">
        <View style={styles.modal}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpendQRCode(false)}
          >
            <QRCode
              value="https://projeto-portfolio-ruddy.vercel.app/"
              size={250}
            />
            <Fontisto
              name="close"
              size={30}
              color="black"
              style={styles.modalIcon}
            />
          </TouchableOpacity>
        </View>
      </Modal>
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

  modal: {
    flex: 1,
    backgroundColor: colors.green[500],
    alignItems: "center",
    justifyContent: "center",
  },

  modalIcon: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: colors.orange[500],
  },
});
