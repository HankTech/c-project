import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextProps, ActivityIndicatorProps } from 'react-native'
import React from 'react'
import Loading from './Loading'

interface buttonProps {
  text: string,
  buttonStyle?: TouchableOpacityProps['style'],
  textStyle?: TextProps['style'],
  onPress: Function,
  loading?: boolean,
  loadingColor?: ActivityIndicatorProps['color']
}

const Button = ({ text, buttonStyle, textStyle, onPress, loading, loadingColor }: buttonProps) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={() => onPress()}>
      {loading ? <Loading size={30} color={loadingColor || 'white'} /> : <Text style={[styles.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 45,
    borderRadius: 7,
    backgroundColor: '#338DFF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500'
  }
})

export default Button
