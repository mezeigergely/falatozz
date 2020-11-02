import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../src/Index';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';

const Stack = createStackNavigator();

const Navigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    </Stack.Navigator>
);

export default Navigator;