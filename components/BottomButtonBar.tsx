import * as React from "react";
import {
  Button,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Separator from "./Separator";

type Props = {
  title: string;
  clickHandler: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

export default function BottomButtonBar({ title, clickHandler }: Props) {
  const colorScheme = useColorScheme();

  return (
    <View>
      <Separator width="100%" />
      <View
        style={[
          styles.buttonBar,
          { backgroundColor: Colors[colorScheme].foreground },
        ]}
      >
        <Button title={title} onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBar: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
