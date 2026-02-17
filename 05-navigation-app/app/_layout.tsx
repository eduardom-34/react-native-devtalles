import { Slot, SplashScreen } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFonts } from 'expo-font';

import { useEffect } from 'react';
import './global.css';


const RootLayout = () => {

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, [])

  const [fontsLoaded, error] = useFonts({
    'WorkSansBlack': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSansLight': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSansMedium': require('../assets/fonts/WorkSans-Medium.ttf'),
  })

  useEffect(() => {

    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();


  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />

    </GestureHandlerRootView>
  );
  // return <Slot />
  // return <Stack />
}

export default RootLayout
