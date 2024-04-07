import React from "react";
import QRCodeSvg from "react-native-qrcode-svg";

import { colors } from "@/styles/colors";

type Props = {
  value: string;
  size: number;
};

export default function QRCode({ value, size }: Props) {
  return (
    <QRCodeSvg
      value={value}
      size={size}
      color={colors.white}
      backgroundColor="transparent"
    />
  );
}
