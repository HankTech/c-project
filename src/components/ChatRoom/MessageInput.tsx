import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MessageInput = () => {
  const [message, setMessage] = useState('')

  const onPressSend = () => {
    console.warn(message)
    setMessage('')
  }

  const onPressPlus = () => {
    console.warn('press plus')
  }

  const onPress = () => {
    if (message) {
      onPressSend()
    } else {
      onPressPlus()
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon name='smile-o' size={25} color='gray' />

        <TextInput
          style={styles.input}
          placeholder='message'
          placeholderTextColor='gray'
          value={message}
          onChangeText={setMessage}
        />

        <FeatherIcon name='camera' size={25} color='gray' style={styles.iconCamera} />
        <MaterialCommunityIcons name='microphone-outline' size={25} color='gray' style={styles.iconMicrophone} />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        {message ? <Ionicons name='send' size={23} color='white' /> : <FeatherIcon name='plus' size={25} color='white' />}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  inputContainer: {
    flex: 1,
    maxHeight: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },

  iconCamera: {
    marginRight: 5
  },

  input: {
    flex: 1,
    height: 80,
    color: 'black',
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16
  },

  iconMicrophone: {
    marginRight: 4
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
