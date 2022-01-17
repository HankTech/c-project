import React from 'react'
import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import styles from './styles'

export default function ChatRoomItem ({ chatRoom }) {
  console.log(chatRoom)

  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={{ uri: chatRoom.users[1].imageUri }} resizeMode='cover' />

      {
        chatRoom.newMessages &&
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
          </View>
      }

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{chatRoom.users[1].name}</Text>
          <Text style={styles.date}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.message}>{chatRoom.lastMessage.content}</Text>
      </View>
    </View>
  )
}
