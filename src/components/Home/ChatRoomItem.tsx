import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  },

  badgeContainer: {
    backgroundColor: '#3777F0',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
    borderColor: 'white',
    borderWidth: 1
  },

  badgeText: {
    color: '#FFF',
    fontSize: 12
  },

  rightContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  name: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18
  },

  date: {
    color: 'gray'
  },

  message: {
    color: 'gray',
    fontSize: 16
  }
})
