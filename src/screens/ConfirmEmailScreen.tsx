import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import i18n from '../languages/i18n.config'
import { EMAIL_REGEX } from '../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Auth } from 'aws-amplify'

//  components
import Input from '../components/common/Input'
import Button from '../components/common/Button'

interface confirmCodeScreenPros {
  email: string
}

const ConfirmCodeScreen = ({ email }: confirmCodeScreenPros) => {
  const { control, handleSubmit } = useForm({ defaultValues: { email } })
  const [loading, setLoading] = useState(false)

  const onConfirmePressed = async (data) => {
    if (loading) {
      return
    }

    setLoading(true)

    try {
      // await Auth.confirmSignUp()
    } catch (error: any) {
      console.log(error)
      Alert.alert('Oops', error.message)
    }

    setLoading(false)
  }

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.subtitle}>Confirm your email</Text>
        <Input
          name='email'
          control={control}
          rules={{
            required: { value: true, message: i18n.t('the email is required') },
            pattern: { value: EMAIL_REGEX, message: i18n.t('enter a valid email') }
          }}
          placeholder={i18n.t('email')}
          inputStyles={styles.input}
          inputContainerStyles={styles.inputContainer}
        />

        <Input
          name='confirmCode'
          control={control}
          rules={{
            required: { value: true, message: i18n.t('the confirmation code is required') }
          }}
          placeholder={i18n.t('enter your confirmation code')}
          inputStyles={styles.input}
          inputContainerStyles={styles.inputContainer}
        />

        <Button text={i18n.t('confirm')} onPress={handleSubmit(onConfirmePressed)} buttonStyle={styles.confirmButton} loading={loading} />
        <Button text={i18n.t('resend code')} buttonStyle={styles.resendCode} textStyle={styles.textResendCode} loading={loading} />

      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  inner: {
    paddingBottom: 15,
    paddingHorizontal: 10
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50
  },

  inputContainer: {
    marginBottom: 35
  },

  input: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 10
  },

  confirmButton: {
    marginTop: '15%',
    marginBottom: 25
  },

  resendCode: {
    backgroundColor: 'white',
    borderColor: '#338DFF',
    borderWidth: 1
  },

  textResendCode: {
    color: '#338DFF'
  }

})

export default ConfirmCodeScreen
