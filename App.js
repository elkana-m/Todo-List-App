import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './navigation/authStack';

export default function App() {
  return (
    <>
      <AuthStack/>
      <StatusBar style='dark'/>
    </>
  )
}



const styles = StyleSheet.create({
  

});
