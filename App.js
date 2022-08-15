import React, { Fragment, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import * as SystemUI from 'expo-system-ui';
import * as ScreenOrientation from 'expo-screen-orientation';
import NavigationStack from './src/components/navigation/StackNavigation';
import { colors } from './src/scripts/consts';
import './src/translation/i18n'

export default function App() {

  const [loaded] = useFonts({
    GilroyBold: require('./assets/fonts/Gilroy-Bold.ttf'),
    Gilroy: require('./assets/fonts/Gilroy-Regular.ttf'),
  });

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }

  SystemUI.setBackgroundColorAsync(colors.dark_green);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </>
  );
}
