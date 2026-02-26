import { Text, View } from 'react-native';

import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import '../global.css';

const RootLayout = () => {

  nowPlayingAction();

  return (
    <View>
      <Text className='text-2xl font-bold'>RootLayout</Text>
    </View>
  )
}

export default RootLayout