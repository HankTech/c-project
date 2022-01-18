import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon name='smile-o' size={25} color='gray' style={styles.icon} />
        <TextInput style={styles.input} />
        <FeatherIcon name='camera' size={25} color='gray' style={styles.icon} />
        <MaterialCommunityIcons name='microphone-outline' size={25} color='gray' style={styles.icon} />
      </View>
      <View style={styles.buttonContainer}>
        <FeatherIcon name='plus' size={25} color='white' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10
  },

  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    flexDirection: 'row',
    alignItems: 'center'
  },

  icon: {
    marginRight: 5
  },

  input: {
    flex: 1
  },

  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#3777F0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontSize: 35
  }
})

export default MessageInput
