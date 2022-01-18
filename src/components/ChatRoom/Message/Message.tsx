import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const myID = 'u1'

const Message = ({ message }) => {
  const isMe = message.user.id === myID

  return (
    <View style={[styles.container, isMe && { backgroundColor: 'lightgray', alignSelf: 'flex-end' }]}>
      <Text style={[styles.text, isMe && { color: 'black' }]}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3777F0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
    alignSelf: 'flex-start'
  },
  text: {
    color: 'white'
  }
})

export default Message
