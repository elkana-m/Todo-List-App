import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Task from './components/Task';

export default function App() {
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
        behavior={Platform.OS === "ios"? "padding" : "heght"}
        style={styles.writeTaskWrapper}
      />

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
});
