import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const index = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant='h1'>50 x 50</ThemeText>
        <ThemeText variant='h2'>250</ThemeText>
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.row}>
        {/* Boton1 */}
        <CalculatorButton
          label='C'
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("C")}
        />
        <CalculatorButton
          label='+/-'
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label='del'
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton label='÷' onPress={() => console.log("÷")}
        />
      </View>

    </View>
  )
}

export default index