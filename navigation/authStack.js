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
                <Stack.Screen name='Sign In' component={SignInScreen} />
                <Stack.Screen name='Sign Up' component={SignUpScreen} />
                <Stack.Screen name='Tasks' component={TaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}