import React from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'

//  components
import Message from '../components/ChatRoom/Message'
import MessageInput from '../components/ChatRoom/MessageInput'

import chatRoomData from '../assets/dummy-data/Chats'

const ChatRoomScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})

export default ChatRoomScreen
