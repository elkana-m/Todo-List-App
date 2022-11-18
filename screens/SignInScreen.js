import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SignIncreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={onChangeText}
        value={text}
        placeholder='Email'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Password'
        keyboardType='numeric'
        editable
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1A2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: '30dp',
    fontStyle: "italic",
    marginBottom:50
  },
  input: {
    height: 40,
    width: 320,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
});