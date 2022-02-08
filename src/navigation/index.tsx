import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavigationContainer, useRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FastImage from 'react-native-fast-image'
import Feather from 'react-native-vector-icons/Feather'

//  screens
import HomeScreen from '../screens/HomeScreen'
import ChatRoomScreen from '../screens/ChatRoomScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            title: 'the C project',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' },
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
            ),
            headerShadowVisible: false
          }}
        />
        <Stack.Screen
          name='ChatRoomScreen'
          component={ChatRoomScreen}
          options={(props) => (
            {
              title: props.title,
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
              headerShadowVisible: false,
              headerBackVisible: true
            }
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
