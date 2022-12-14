import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import SignUpcreen from './SignUpScreen';
import { auth, initializeApp } from '../config/firebase'

export default function SignIncreen() {
  const auth = getAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const twoButtonAlert = (alertTitle, alertMsg, option1, option2, nav0, nav1) =>
    Alert.alert(
      alertTitle,
      alertMsg,
      [
        {
          text: option1,
          onPress: () => navigation.navigate(`${nav0}`),
          style: "cancel"
        },
        { text: option2, onPress: () => navigation.navigate(`${nav1}`) }
      ]
    );
  async function SignIn (){
    if (email === '' || password === ''){
      Alert.alert('Email and Password are mandatory')
      return;
    }
    else if (password.length < 8){
      Alert.alert('Password must be more than 8 characters')
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigation.navigate("Tasks")
    } catch(error) {
      setEmail(email)
      setPassword(password)
    }

  }
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
        style={styles.loginBtn}
        onPress={() => SignIn()}>
        <Text
          style={styles.loginText}>Sign in
        </Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity
        style={styles.loginGoogle}
        onPress={() => Alert.alert('Sign In with Google')}>
        <Text
          style={styles.loginGoogleText}>Sign in with Google
        </Text>
      </TouchableOpacity>
      <Text style={styles.noAccText}>Don't have an account?</Text>
      <TouchableOpacity style={styles.signupBtn}>
        <Text
          style={styles.newAccText}
          onPress={() => twoButtonAlert("Sign up", "Are you sure you want to sign up?", "No", "Yes", "Sign_In", "Sign_Up")}>
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
    marginBottom: 50
  },
  input: {
    height: 40,
    width: 320,
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  forgot_button: {
    color: "#fff",
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
    color: '#fff'
  },
  orText: {
    color: "#fff",
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