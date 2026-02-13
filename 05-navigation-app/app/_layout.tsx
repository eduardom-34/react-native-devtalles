import { Slot, SplashScreen } from 'expo-router';

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

  return <Slot />
  // return <Stack />
}

export default RootLayout
