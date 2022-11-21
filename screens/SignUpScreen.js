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
      <Text>Sign-Up screen!</Text>
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
});