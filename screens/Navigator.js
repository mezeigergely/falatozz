import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../src/Index';

const Stack = createStackNavigator();

const Navigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Index" component={Index} />
        
    </Stack.Navigator>
);

export default Navigator;
