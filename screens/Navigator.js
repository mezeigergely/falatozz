import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import ProductsScreen from './ProductsScreen';

const Stack = createStackNavigator();

const Navigator = ({navigation}) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
    </Stack.Navigator>
);

export default Navigator;
