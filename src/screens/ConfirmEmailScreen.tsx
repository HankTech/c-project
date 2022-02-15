import { View, StyleSheet, Alert } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import i18n from '../languages/i18n.config'
import { EMAIL_REGEX } from '../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Auth } from 'aws-amplify'

//  components
import Input from '../components/common/Input'
import Button from '../components/common/Button'

type formData = {
  email: string,
  code: string
}

const ConfirmCodeScreen = () => {
  const route = useRoute<any>()

  const navigation = useNavigation<any>()

  const { control, handleSubmit, watch } = useForm<formData>({ defaultValues: { email: route.params?.email } })

  const email = watch('email')

  const [loadingOnConfirm, setLoadingOnConfirm] = useState(false)
  const [loadingOnResend, setLoadingOnResend] = useState(false)

  const onConfirmePressed = async (data: formData) => {
    if (loadingOnConfirm) {
      return
    }

    setLoadingOnConfirm(true)

    try {
      await Auth.confirmSignUp(data.email, data.code)
      navigation.navigate('SignInScreen')
    } catch (error: any) {
      console.log(error)
      Alert.alert('Oops', error.message)
    }

    setLoadingOnConfirm(false)
  }

  const onResendPressed = async () => {
    if (loadingOnResend) {
      return
    }

    setLoadingOnResend(true)

    try {
      await Auth.resendSignUp(email)
      Alert.alert('susscess code was resent your email')
    } catch (error: any) {
      console.log(error)
      Alert.alert('Oops', error.message)
    }

    setLoadingOnResend(false)
  }

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.inner}>
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
          name='code'
          control={control}
          rules={{
            required: { value: true, message: i18n.t('the confirmation code is required') }
          }}
          placeholder={i18n.t('enter your confirmation code')}
          inputStyles={styles.input}
          inputContainerStyles={styles.inputContainer}
        />

        <Button
          text={i18n.t('confirm')}
          onPress={handleSubmit(onConfirmePressed)}
          buttonStyle={styles.confirmButton}
          loading={loadingOnConfirm}
        />
        <Button
          text={i18n.t('resend code')}
          onPress={onResendPressed}
          buttonStyle={styles.resendCode}
          textStyle={styles.textResendCode}
          loading={loadingOnResend}
          loadingColor='#338DFF'
        />

      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  inner: {
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 10
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
    alignSelf: 'center',
    marginBottom: 25,
    width: '100%'
  },

  resendCode: {
    backgroundColor: 'white',
    borderColor: '#338DFF',
    borderWidth: 1,
    alignSelf: 'center',
    width: '100%'
  },

  textResendCode: {
    color: '#338DFF'
  }

})

export default ConfirmCodeScreen
