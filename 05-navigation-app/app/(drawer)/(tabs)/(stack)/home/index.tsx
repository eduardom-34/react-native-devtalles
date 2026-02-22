import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import '../../../global.css'+

const HomeScreen = () => {

  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  }

  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>

        <CustomButton
          className='mb-2'
          color="primary"
          onPress={() => router.push('/(drawer)/(tabs)/(stack)/products')}
        >Productos
        </CustomButton>

        <CustomButton
          onPress={() => router.push('/(drawer)/(tabs)/(stack)/profile')}
          className='mb-2'
          color='secondary'
        >Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push('/(drawer)/(tabs)/(stack)/settings')}
          className='mb-2'
          color='tertiary'
        >Ajustes
        </CustomButton>

        <Link href='/(drawer)/(tabs)/(stack)/products' asChild>
          <CustomButton
            className='mb-10'
            variant='text-only'
            color="primary"
            onPress={() => router.push('/(drawer)/(tabs)/(stack)/products')}
          >Productos
          </CustomButton>
        </Link>

        <CustomButton
          onPress={onToggleDrawer}
        >Abrir menu</CustomButton>

        {/* <Link className='mb-5' href='/products'>
          Productos{' '}
        </Link>
        <Link className='mb-5' href='/profile'>
          Perfil{' '}
        </Link>
        <Link className='mb-5' href='/settings'>
          Ajustes{' '}
        </Link> */}


      </View>
    </SafeAreaView >
  )
}

export default HomeScreen