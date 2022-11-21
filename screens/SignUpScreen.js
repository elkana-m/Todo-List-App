import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity} from 'react-native';

export default function SignUpcreen() {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const twoButtonAlert = (alertTitle, alertMsg, option1, option2) =>
    Alert.alert(
      alertTitle,
      alertMsg,
      [
        {
          text: option1,
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: option2, onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    <View style={styles.container}>
      <Text style={styles.loginHeaderText}>Sign up</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={setName}
        value={name}
        placeholder='Username'
        placeholderTextColor={'#ffff'}
        color='#fff'
      />
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
        editable
        color='#fff'
        secureTextEntry={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginHeaderText: {
    color: "#fff",
    fontSize: '30dp',
    fontWeight: 'bold',
    marginBottom:50
  },
  input: {
    height: 40,
    width: 320,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  }
});