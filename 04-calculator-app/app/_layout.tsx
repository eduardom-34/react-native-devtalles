import { Colors } from '@/constants/theme';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

const RootLayout = () => {

  // const [] = useFonts({
  //   SpaceMono: require('../asse')
  // })


  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>

      <Slot />

      <StatusBar style='light' />

    </View>
  )
}

export default RootLayout