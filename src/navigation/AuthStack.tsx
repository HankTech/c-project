import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import i18n from '../languages/i18n.config'

//  screens
import IntroScreen from '../screens/IntroScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
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
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
          headerShadowVisible: false
        }}
      />

      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{
          title: i18n.t('create a new account'),
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
          headerShadowVisible: false
        }}
      />

      <Stack.Screen
        name='ConfirmEmailScreen'
        component={ConfirmEmailScreen}
        options={({ route }: any) => ({
          title: i18n.t('confirm sign up'),
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
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
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
          headerShadowVisible: false
        })}
      />

      <Stack.Screen
        name='NewPasswordScreen'
        component={NewPasswordScreen}
        options={({ route }: any) => ({
          title: i18n.t('reset your password'),
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
          headerShadowVisible: false,
          headerBackVisible: false
        })}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
