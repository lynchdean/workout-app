import React, {useState} from 'react'
import { Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import Workout from '../components/Workout';
import FlatListItem from '../components/FlatListItem'

export default function TabOneScreen() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const NewWorkout = () => {
    const id: string = (workouts.length + 1).toString();
    const newWorkout = new Workout('Workout ' + id, id);
    setWorkouts([...workouts, newWorkout]);
  }

  return (
    <View style={styles.container}>
      <FlatList<Workout>
        data={workouts}
        renderItem={({item}) => (<FlatListItem title={item.name} />)}
        keyExtractor={item => item.id}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="New Workout" onPress={() => NewWorkout()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
