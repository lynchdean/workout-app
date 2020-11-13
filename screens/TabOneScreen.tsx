import React, {useState} from 'react'
import { Button, StyleSheet, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { View } from '../components/Themed';
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
      <FlatList<Workout> style={styles.list}
        data={workouts}
        renderItem={({item}) => (<FlatListItem title={item.name} />)}
        keyExtractor={item => item.id}
      />
      <Button title="New Workout" onPress={() => NewWorkout()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    flex: 1
  }
});
