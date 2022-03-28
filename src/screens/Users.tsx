import React from 'react'
import { FlatList } from 'react-native'

//  components
import UserItem from '../components/Users/UserItem'

import UsersData from '../../assets/dummy-data/Users'

const Users = () => {
  return (
    <FlatList
      data={UsersData}
      renderItem={({ item }) => <UserItem user={item} />}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default Users
