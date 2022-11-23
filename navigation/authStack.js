import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import TaskScreen from '../screens/TaskScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator() ;

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Sign In' component={SignInScreen} options={{headerShown:false}} />
                <Stack.Screen name='Sign Up' component={SignUpScreen} options={{headerShown:false}} />
                <Stack.Screen name='Tasks' component={TaskScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}