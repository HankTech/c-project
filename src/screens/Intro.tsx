import { View, Animated, StyleSheet, StatusBar, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Intro = () => {
  const translation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 1200,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#2234FC' />

      <Animated.View
        style={[
          styles.banner,
          {
            transform: [
              {
                scaleY: translation.interpolate({
                  inputRange: [0, 300],
                  outputRange: [1, 0.3]
                })
              },
              {
                translateY: translation.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -380]
                })
              }
            ]
          }
        ]}
      />
        <Animated.Text
          style={[
            styles.bannerText,
            {
              transform: [
                {
                  translateY: translation.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -220]
                  })
                },
                {
                  scale: translation.interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 0.7]
                  })
                }
              ]
            }
          ]}
        >
          Project C
        </Animated.Text>

      <Animated.View
        style={[
          styles.body,
          {
            transform: [
              {
                translateY: translation.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -380]
                })
              }
            ]
          }
        ]}
      >
        <Text style={{ color: '#000', fontSize: 40, marginTop: 35 }}>Hello There</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#2234FC'
  },

  banner: {
    backgroundColor: '#2234FC',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },

  bannerText: {
    fontSize: 45,
    color: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    top: '47%',
    fontFamily: 'Righteous-Regular'
  },

  body: {
    backgroundColor: '#fff',
    bottom: '-100%',
    height: '100%',
    width: '100%'
  }
})

export default Intro
