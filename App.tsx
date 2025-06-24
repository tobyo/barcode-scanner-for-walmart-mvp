import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import WatchListScreen from './src/screens/WatchListScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="WatchList" component={WatchListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
