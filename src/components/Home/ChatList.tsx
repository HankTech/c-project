import React from 'react'
import { FlatList } from 'react-native'

//  component
import ChatRoomItem from './ChatRoomItem'

import chatRoomsData from '../../assets/dummy-data/ChatRooms'

export default function ChatList () {
  return (
    <FlatList
      data={chatRoomsData}
      renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      showsVerticalScrollIndicator={false}
    />
  )
}
