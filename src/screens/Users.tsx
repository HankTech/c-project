import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { DataStore } from '@aws-amplify/datastore'
import { User } from '../models'

//  components
import UserItem from '../components/Users/UserItem'

const Users = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await DataStore.query(User)
      setUsers(fetchedUsers)
      console.log(fetchedUsers)
    } catch (error) {
      console.error(error)
    }
  }

  console.log(users)

  useEffect(() => {
    //  query users
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Users
