import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const Navigator = ({navigation}) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    </Stack.Navigator>
);

export default Navigator;
