import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import AirQualityIndex from '../../pages/AirQualityIndex';
import AirQualityIndexCalculation from '../../pages/AirQualityIndexCalculation';
import UpdateFrequency from '../../pages/UpdateFrequency';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="IQA" component={AirQualityIndex} />
      <Stack.Screen name="IQACalculation" component={AirQualityIndexCalculation} />
      <Stack.Screen name="FrequencyUpdate" component={UpdateFrequency} />
    </Stack.Navigator>
  )
}