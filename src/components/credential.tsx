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

type Props = {
  image?: string;
  onChangeAvatar: () => void;
};

export function Credential({ onChangeAvatar, image }: Props) {
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
            <Text style={styles.numero}>#123</Text>
          </View>

          <View style={styles.containerImage} />
        </ImageBackground>

        {image ? (
          <Image
            style={styles.image}
            source={{ uri: "https://github.com/juliafclima.png" }}
          />
        ) : (
          <TouchableOpacity activeOpacity={0.7} style={styles.image}>
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text style={styles.imageText}>Julia Lima</Text>

        <Text style={styles.imageTextEmail}>Juliafclima@hotmail.com</Text>

        <Image
          style={styles.qrCode}
          source={require("@/assets/ticket/qrcode.png")}
        />

        <TouchableOpacity style={styles.qrCodeAmpliarBotao} activeOpacity={0.7}>
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
    fontSize: 10,
  },

  qrCodeAmpliarBotao: {
    marginTop: 10,
  },
});
