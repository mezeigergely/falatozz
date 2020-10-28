import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Navigator from './screens/Navigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if(isLoading)
  {
    return(
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size='large' />
    </View>
    );
  }

  return(
    <NavigationContainer>
          <Navigator/>
    </NavigationContainer>

  );
}
