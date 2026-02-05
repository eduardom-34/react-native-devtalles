import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { Text, View } from 'react-native'

const index = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <Text style={globalStyles.mainResult} numberOfLines={1} adjustsFontSizeToFit>50 x 500000</Text>
            <Text style={globalStyles.subResult}>250</Text>
        </View>
    )
}

export default index