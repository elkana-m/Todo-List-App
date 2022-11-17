import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIncreen from '../screens/SignInScreen';
import HomeScreen from '../App';
import SignUpcreen from '../screens/SignUpScreen';

const Stack = createStackNavigator() ;

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Sign In' component={SignInScreen} />
                <Stack.Screen name='Sign Up' component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}