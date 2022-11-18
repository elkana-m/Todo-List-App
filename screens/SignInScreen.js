import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function SignIncreen() {
  const [email, onChangeText] = React.useState(null);
  const [password, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={onChangeText}
        value={email}
        placeholder='Email'
        placeholderTextColor={'#ffff'}
        color='#fff'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={onChangeNumber}
        value={password}
        placeholder='Password'
        placeholderTextColor={'#ffff'}
        color='#fff'
        keyboardType='numeric'
        editable
      />
      <Button
        title="Sign in"
        onPress={() => Alert.alert('Sign In button pressed')}
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