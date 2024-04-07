import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type IconName =
  | "ticket-confirmation-outline"
  | "account-circle-outline"
  | "email-open-outline";

interface InputProps extends TextInputProps {
  icon?: IconName;
  placeholderTextColor?: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  placeholderTextColor,
  keyboardType,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...rest}
        style={[styles.input, { color: placeholderTextColor }]}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />

      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.green[200]}
          size={20}
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: colors.gray[200],
  },

  icon: {
    marginRight: 10,
  },
});

export { Input };
