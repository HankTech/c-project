import React from 'react'
import { FlatList } from 'react-native'

//  components
import ChatRoomItem from '../components/Home/ChatRoomItem'

import chatRoomsData from '../../assets/dummy-data/ChatRooms'

const HomeScreen = () => {
  return (
    <FlatList
      data={chatRoomsData}
      renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default HomeScreen
