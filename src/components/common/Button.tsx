import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextProps } from 'react-native'
import React from 'react'
import Loading from './Loading'

interface buttonProps {
  text: string,
  buttonStyle?: TouchableOpacityProps['style'],
  textStyle?: TextProps['style'],
  onPress: Function,
  loading?: boolean
}

const Button = ({ text, buttonStyle, textStyle, onPress, loading }: buttonProps) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={() => onPress()}>
      {loading ? <Loading size={30} color='white' /> : <Text style={[styles.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#338DFF',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  },

  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500'
  }
})

export default Button
