import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextProps } from 'react-native'
import React from 'react'

interface buttonProps {
  text: string,
  buttonStyle?: TouchableOpacityProps['style'],
  textStyle?: TextProps['style'],
  onPress: Function
}

const Button = ({ text, buttonStyle, textStyle, onPress }: buttonProps) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={() => onPress()}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#338DFF',
    paddingVertical: 15,
    borderRadius: 7
  },

  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500'
  }
})

export default Button
