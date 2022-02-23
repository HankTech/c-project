import { View, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'

//  components
import Input from '../components/common/Input'
import Button from '../components/common/Button'

const ForgotPasswordScreen = () => {
  const { control } = useForm()
  const navigation = useNavigation<any>()

  const onSendPressed = async (data: any) => {
    try {
      await Auth.forgotPassword(data.forgotPassword)
      navigation.navigate('NewPassword')
    } catch (error: any) {
      Alert.alert('Opps', error?.message)
    }
  }

  return (
    <KeyboardAwareScrollView style={styles.root}>
      <View style={styles.container}>
        <Input
          control={control}
          name='forgotPassword'
          placeholder='email'
          inputStyles={styles.input}
          inputContainerStyles={styles.forgotPasswordInput}
        />

        <Button
          text='Send'
          onPress={onSendPressed}
          buttonStyle={styles.sendButton}
        />
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },

  container: {
    flex: 1,
    paddingHorizontal: 15
  },

  input: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 10
  },

  forgotPasswordInput: {
    marginTop: 35,
    marginBottom: 55
  },

  sendButton: {
    alignSelf: 'center'
  }
})

export default ForgotPasswordScreen
