import { colors } from "@/styles/colors";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import QRCode from "@/components/qrcode";

type Props = {
  image?: string;
  onChangeAvatar?: () => void;
  onExpandQRCode?: () => void;
};

export function Credential({ onChangeAvatar, onExpandQRCode, image }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/ticket/band.png")} style={styles.band} />

      <View style={styles.corda}>
        <ImageBackground
          style={styles.header}
          source={require("@/assets/ticket/header.png")}
        >
          <View style={styles.containerConteudo}>
            <Text style={styles.titulo}>Unite summit</Text>
            <Text style={styles.numero}>#LY6AXAYJFNZR</Text>
          </View>

          <View style={styles.containerImage} />
        </ImageBackground>

        {image ? (
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <Image style={styles.image} source={{ uri: image }} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onChangeAvatar}
            activeOpacity={0.9}
            style={styles.image}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text style={styles.imageText}>Julia Lima</Text>

        <Text style={styles.imageTextEmail}>Juliafclima@hotmail.com</Text>

        <QRCode value="https://projeto-portfolio-ruddy.vercel.app/" size={150} />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.qrCodeAmpliarBotao}
          onPress={onExpandQRCode}
        >
          <Text style={styles.qrCodeAmpliar}>Ampliar QRcode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "stretch",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  band: {
    width: 24,
    height: 52,
    zIndex: 10,
  },

  corda: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    alignSelf: "stretch",
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    marginHorizontal: 3,
    borderRadius: 2,
    marginTop: -5,
  },

  header: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 140,
    width: "100%",
    alignItems: "center",
    alignSelf: "stretch",
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    overflow: "hidden",
  },

  containerConteudo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titulo: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  numero: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  containerImage: {
    width: 140,
    height: 140,
    backgroundColor: "black",
    borderRadius: 100,
  },

  image: {
    width: 126,
    height: 126,
    borderRadius: 100,
    marginTop: -102,
    backgroundColor: "#999FAC",
    alignItems: "center",
    justifyContent: "center",
  },

  imageText: {
    fontWeight: "bold",
    marginTop: 4,
    fontSize: 20,
    color: "white",
  },

  imageTextEmail: {
    fontWeight: "400",
    marginTop: 4,
    fontSize: 15,
    color: "white",
    marginBottom: 12,
  },

  qrCode: {
    width: 128,
    height: 128,
  },

  qrCodeAmpliar: {
    color: colors.orange[500],
    fontSize: 13,
  },

  qrCodeAmpliarBotao: {
    marginTop: 10,
  },
});
