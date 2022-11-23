import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';

export default function SignIncreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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
      <Text style={styles.loginHeaderText}>Sign In</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder='Email'
        placeholderTextColor={'#ffff'}
        color='#fff'
      />
      <TextInput 
        style={styles.input} 
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder='Password'
        placeholderTextColor={'#ffff'}
        color='#fff'
        secureTextEntry={true}
        editable
      />
      <TouchableOpacity>
        <Text 
          style={styles.forgot_button} 
          onPress={() => Alert.alert('Forgot Password pressed')}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.loginBtn}
        onPress={() => Alert.alert('Sign In button pressed')}>
        <Text 
          style={styles.loginText}>Sign in
        </Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity
        style = {styles.loginGoogle}
        onPress={() => Alert.alert('Sign In with Google')}>
        <Text 
          style={styles.loginGoogleText}>Sign in with Google
        </Text>
      </TouchableOpacity>
      <Text style={styles.noAccText}>Don't have an account?</Text>
      <TouchableOpacity style={styles.signupBtn}>
        <Text 
          style={styles.newAccText} 
          onPress={() => twoButtonAlert("Sign up", "Are you sure you want to sign up?","No", "Yes")}>
          Create an account
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
  loginHeaderText: {
    color: "#fff",
    fontSize: '30dp',
    fontWeight: "bold",
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
  forgot_button:{
    color:"#fff",
    height: 30,
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
  },
  orText:{
    color:"#fff",
    marginTop: 10,
  },
  loginGoogle: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "rgba(1,2,4, 0.7)",
  },
  loginGoogleText: {
    color: '#fff',
  },
  noAccText: {
    color: "#fff",
    paddingTop: 50,
  },
  newAccText: {
    color: "#fff",
    textDecorationLine: 'underline'
  }
});