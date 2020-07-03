import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

const styles = StyleSheet.create({
  task: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#5960c1',
  },
  list: {
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,

    fontWeight: 'bold',
    color: '#fff',

    marginTop: 30,
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await api.get('/tasks');
      setTasks([
        ...response.data,
        {id: 'aaaa', title: 'Leonardo'},
        {id: 'bbb', title: 'Maria'},
      ]);
    }

    loadTasks();
  }, []);

  async function handleAddProject() {
    try {
      const response = await api.post('/tasks', {
        title: 'Nova tarefa',
      });

      setTasks([...tasks, response.data]);
    } catch (err) {}
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Listagem</Text>
        <FlatList
          data={tasks}
          keyExtractor={task => task.id}
          renderItem={({item: task}) => (
            <Text style={styles.task}>{task.title}</Text>
          )}
          style={styles.list}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Nova tarefa</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
