import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FastImage from 'react-native-fast-image'
import Feather from 'react-native-vector-icons/Feather'

//  screens
import HomeScreen from '../screens/HomeScreen'
import ChatRoomScreen from '../screens/ChatRoomScreen'
import Users from '../screens/Users'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={({ navigation }) => (
          {
            title: 'Project C',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 22, fontFamily: 'Roboto-Bold' },
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

                <TouchableOpacity onPress={() => navigation.navigate('UsersScreen')}>
                  <Feather name='edit-2' color='black' size={24} />
                </TouchableOpacity>
              </View>
            )
          }
        )}
      />

      <Stack.Screen
        name='ChatRoomScreen'
        component={ChatRoomScreen}
        options={({ title }) => (
          {
            title: title,
            headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
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

      <Stack.Screen
        name='UsersScreen'
        component={Users}
        options={{
          headerTitle: 'Users',
          headerTitleStyle: { fontSize: 22, fontFamily: 'Roboto-Bold' }
        }}
      />
    </Stack.Navigator>
  )
}

export default MainStack
