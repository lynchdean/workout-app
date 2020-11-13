import * as React from 'react';

import { View, StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
}

function FlatListItem({title}: Props) {
    return (
      <View>
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  separator: {
    height: 1,
    width: '80%',
  },
});

export default FlatListItem;
