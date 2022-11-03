import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    console.log(task) ;
  }

  return (
    <View style={styles.container}>

      {/*Today's Task*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Task text={'📍 9AM - Jira Training'}/>
          <Task text={'🧪 10AM - Adam Tplan'}/>
          <Task text={'📈 1PM - Chris & Adam'}/>
          <Task text={'🧐 3PM - Jira'}/>
          <Task text={'👨‍🏫 6PM - Dorcas Tutor'}/>
          <Task text={'👨‍💻 8PM  - Kotlin / Git / Expo        🛌 12AM - Sleep'}/>
          </View>

      </View>
      
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "heght"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'}/>
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.asddText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    padding: 90,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper:{
    position : 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{},
});
