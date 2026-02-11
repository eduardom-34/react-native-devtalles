import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import './global.css'

const App = () => {
  return (

    <SafeAreaView>

      <View className="mt-6 mx-2.5 ">

        <Text className='text-5xl'
          style={{ fontFamily: 'WorkSansBlack' }}
        >Hola mundo</Text>


        <Text className='text-4xl font-work-medium text-primary'>Hola mundo</Text>
        <Text className='text-3xl font-work-light text-secondary'>Hola mundo</Text>
        <Text className='text-2xl font-work-light text-secondary-100'>Hola mundo</Text>
        <Text className='text-xl font-work-light text-secondary-200'>Hola mundo</Text>
        <Text className='text-xl font-work-light text-tertiary'>Hola mundo</Text>
      </View>

    </SafeAreaView>
  )
}

export default App