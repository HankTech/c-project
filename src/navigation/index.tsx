import React, { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Auth, Hub } from 'aws-amplify'

//  screens
import MainStack from './MainStack'
import AuthStack from './AuthStack'

const Stack = createNativeStackNavigator()

const AppLoading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator style={{ position: 'absolute' }} size={36} />
    </View>
  )
}

const Navigation = () => {
  const [user, setUser] = useState<any>(undefined)

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
      setUser(authUser)
    } catch (error) {
      console.log(error)
      setUser(false)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    const listener = (data: any) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser()
      }
    }

    Hub.listen('auth', listener)

    return () => Hub.remove('auth', listener)
  }, [])

  if (user === undefined) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='aplashScreen' options={{ header: () => null }} component={AppLoading} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Navigation
