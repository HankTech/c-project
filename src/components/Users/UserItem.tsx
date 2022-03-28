import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'

const UserItem = ({ user }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <FastImage style={styles.image} source={{ uri: user.imageUri }} resizeMode='cover' />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  }
})

export default UserItem
