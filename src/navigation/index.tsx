import React from 'react'
import { useColorScheme, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RNBootSplash from 'react-native-bootsplash'

import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const scheme = useColorScheme()

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={scheme === 'dark' ? 'black' : 'white'} barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'} />
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Navigation
