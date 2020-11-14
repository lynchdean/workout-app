import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Separator from "./Separator";

type Props = {
  title: string;
};

export default function FlatListItem({ title }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Separator width="90%" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
  },
});
