import { StyleSheet, ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import React from 'react'

interface loadingProps {
  color?: ActivityIndicatorProps['color'],
  size?: ActivityIndicatorProps['size'],
  loadingStyles?: ActivityIndicatorProps['style']
}

const Loading = ({ color, size, loadingStyles }: loadingProps) => {
  return (
    <ActivityIndicator color={color} size={size} style={[styles.loading, loadingStyles]} />
  )
}

export default Loading

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    zIndex: 100000
  }
})
