import { StyleSheet, View, Alert, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import i18n from '../languages/i18n.config'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { EMAIL_REGEX } from '../constants'
import { Auth } from 'aws-amplify'

//  components
import Input from '../components/common/Input'
import Button from '../components/common/Button'

type formData = {
  email: string,
  password: string,
}

const SignInScreen = () => {
  const { control, handleSubmit, getValues, setValue } = useForm<formData>()

  const [loading, setLoading] = useState(false)

  const navigation = useNavigation<any>()

  const onBlur = () => {
    const email = getValues('email').trim()
    setValue('email', email)
  }

  const goToSignUp = () => navigation.navigate('SignUpScreen')

  const goToConfirmEmail = () => navigation.navigate('ConfirmEmailScreen')

  const handleButton = async (data: formData) => {
    if (loading) {
      return
    }

    setLoading(true)

    try {
      await Auth.signIn(data.email, data.password)
      navigation.navigate('HomeScreen')
    } catch (error: any) {
      Alert.alert(error.message)
    }
    setLoading(false)
  }

  return (
    <KeyboardAwareScrollView style={styles.root}>
      <View style={styles.container}>
        <Input
          name='email'
          control={control}
          placeholder={i18n.t('email')}
          rules={{
            required: { value: true, message: i18n.t('the email is required') },
            pattern: { value: EMAIL_REGEX, message: i18n.t('enter a valid email') }
          }}
          onBlur={onBlur}
          inputStyles={styles.input}
          inputContainerStyles={styles.emailInput}
        />

        <Input
          name='password'
          control={control}
          placeholder={i18n.t('password')}
          rules={{
            required: { value: true, message: i18n.t('the password is required') },
            minLength: { value: 8, message: i18n.t('password should be minimon 8 characters long') }
          }}
          secureTextEntry
          inputStyles={styles.input}
          inputContainerStyles={styles.passwordInput}
        />

        <Button
          text={i18n.t('continue')}
          onPress={handleSubmit(handleButton)}
          loading={loading}
          buttonStyle={styles.buttonSubmit}
        />

        <View style={styles.buttonsGroup}>
          <Button
            text='Confirm email'
            onPress={goToConfirmEmail}
            textStyle={styles.footerText}
            buttonStyle={[styles.footerButton, styles.confirmEmail]}
          />
          <Button
            text={i18n.t('register')}
            onPress={goToSignUp}
            textStyle={styles.footerText}
            buttonStyle={[styles.footerButton, styles.register]}
          />
        </View>
        <TouchableOpacity style={{ alignSelf: 'center' }}>
          <Text style={styles.forgotPassword}>{i18n.t('forgot password')}</Text>
        </TouchableOpacity>
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

  emailInput: {
    marginTop: 35,
    marginBottom: 55
  },

  passwordInput: {
    marginBottom: '25%'
  },

  buttonSubmit: {
    width: '100%'
  },

  buttonsGroup: {
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
    marginTop: 35,
    alignSelf: 'center',
    marginBottom: 25
  },

  footerText: {
    color: '#338DFF',
    fontSize: 17
  },

  footerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 0
  },

  confirmEmail: {
    width: '40%',
    height: 25
  },

  forgotPassword: {
    fontSize: 17,
    color: '#338DFF',
    fontWeight: '500'
  },

  register: {
    width: '25%',
    height: 25
  }
})

export default SignInScreen
