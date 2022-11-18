import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, useState } from 'react-native';

export default function SignIncreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={setEmail}
        value={email}
        placeholder='Email'
        placeholderTextColor={'#ffff'}
        color='#fff'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={setPassword}
        value={password}
        placeholder='Password'
        placeholderTextColor={'#ffff'}
        color='#fff'
        keyboardType='numeric'
        editable
      />
      <TouchableOpacity
        style = {styles.loginBtn}
        onPress={() => Alert.alert('Sign In button pressed')}>
        <Text 
          style={styles.loginText}>Sign in
        </Text>
      </TouchableOpacity>
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
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#621190",
  },
  loginText: {
    color:'#fff'
  }
});