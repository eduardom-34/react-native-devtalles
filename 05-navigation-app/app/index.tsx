import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import './global.css'

const App = () => {
  return (

    <SafeAreaView>

      <View className="mt-6 mx-2.5 ">
        <Text className='text-3xl'
          style={{ fontFamily: 'WorkSansBlack' }}
        >Hola mundo</Text>


        <Text className='text-3xl font-work-medium'>Hola mundo</Text>
        <Text className='text-3xl font-work-light '>Hola mundo</Text>
      </View>

    </SafeAreaView>
  )
}

export default App