import { colors } from "@/styles/colors";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      style={styles.button}
      {...rest}
    >
      <View>
        {isLoading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: colors.orange[500],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },

  title: {
    color: colors.white,
    fontSize: 16,
  },

  loading: {
    marginTop: 5,
  },
});
