import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';

const Stack = createStackNavigator();

const Navigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        
    </Stack.Navigator>
);

export default Navigator;
