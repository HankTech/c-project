import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FastImage from 'react-native-fast-image'
import Feather from 'react-native-vector-icons/Feather'
import i18n from '../languages/i18n.config'
import { Auth, Hub } from 'aws-amplify'

//  screens
import IntroScreen from '../screens/IntroScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import ChatRoomScreen from '../screens/ChatRoomScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'

const Stack = createNativeStackNavigator()

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
    const listener = (data) => {
      console.log(data)
    }

    Hub.listen('auth', listener)

    return () => Hub.remove('auth', listener)
  }, [])

  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={36} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user
          ? (
            <>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  title: 'the C project',
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
                  headerShadowVisible: false,
                  headerLeft: () => (
                    <FastImage
                      source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
                      style={{ height: 35, width: 35, borderRadius: 30, marginRight: 10 }}
                      resizeMode='cover'
                    />
                  ),
                  headerRight: () => (
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity>
                        <Feather name='camera' color='black' size={24} style={{ marginRight: 10 }} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Feather name='edit-2' color='black' size={24} />
                      </TouchableOpacity>
                    </View>
                  )
                }}
              />
              <Stack.Screen
                name='ChatRoomScreen'
                component={ChatRoomScreen}
                options={(props) => (
                  {
                    title: props.title,
                    headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
                    headerShadowVisible: false,
                    headerLeft: () => (
                      <FastImage
                        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
                        style={{ height: 40, width: 40, borderRadius: 30, marginLeft: -23, marginRight: 10 }}
                        resizeMode='cover'
                      />
                    ),
                    headerRight: () => (
                      <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                          <Feather name='camera' color='black' size={24} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Feather name='edit-2' color='black' size={24} />
                        </TouchableOpacity>
                      </View>
                    ),
                    headerBackVisible: true
                  }
                )}
              />
            </>
            )
          : (
            <>
              <Stack.Screen
                name='IntroScreen'
                component={IntroScreen}
                options={{ header: () => null }}
              />

              <Stack.Screen
                name='SignInScreen'
                component={SignInScreen}
                options={{
                  headerBackVisible: false,
                  title: i18n.t('sign in'),
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
                  headerShadowVisible: false
                }}
              />

              <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
                options={{
                  title: i18n.t('create a new account'),
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
                  headerShadowVisible: false
                }}
              />

              <Stack.Screen
                name='ConfirmEmailScreen'
                component={ConfirmEmailScreen}
                options={({ route }: any) => ({
                  title: i18n.t('confirm sign up'),
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
                  headerShadowVisible: false,
                  headerBackVisible: !!route?.params?.from
                })}
              />

              <Stack.Screen
                name='ForgotPasswordScreen'
                component={ForgotPasswordScreen}
                options={({ route }: any) => ({
                  title: i18n.t('reset your password'),
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
                  headerShadowVisible: false
                })}
              />

              <Stack.Screen
                name='NewPasswordScreen'
                component={NewPasswordScreen}
                options={({ route }: any) => ({
                  title: i18n.t('reset your password'),
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
                  headerShadowVisible: false,
                  headerBackVisible: false
                })}
              />
            </>
            )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
