import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

type Props = {
  title: string;
};

export default function FlatListItem({ title }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
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
  separator: {
    height: 1,
    width: "90%",
  },
});
