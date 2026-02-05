import { View } from 'react-native';

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { globalStyles } from '@/styles/global-styles';

const RootLayout = () => {

  // const [] = useFonts({
  //   SpaceMono: require('../asse')
  // })


  return (
    <View style={globalStyles.background}>

      <Slot />

      <StatusBar style='light' />

    </View>
  )
}

export default RootLayout