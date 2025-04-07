import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screems/HomeScreem';
import DetailScreen from '../screems/DetailScreem';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
