import React from 'react';
import Navigator from './screens/Navigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return(
    <NavigationContainer>
          <Navigator/>
    </NavigationContainer>

  );
}
