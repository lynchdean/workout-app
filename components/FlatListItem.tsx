import * as React from 'react';

import { View, StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
}

function FlatListItem({title}: Props) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    alignSelf: 'stretch',
    textAlign: 'center',
    flex: 1
    padding: 50,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListItem;
