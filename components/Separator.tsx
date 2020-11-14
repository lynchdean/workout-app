import * as React from "react";
import { View } from "../components/Themed";
import { StyleSheet } from "react-native";

type Props = {
  width: string;
};

export default function Separator({ width }: Props) {
  return (
    <View
      style={[styles.separator, { width: width }]}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});
