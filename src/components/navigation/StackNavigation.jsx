import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import AirQualityIndex from '../../pages/AirQualityIndex';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="IQA" component={AirQualityIndex} />
    </Stack.Navigator>
  )
}