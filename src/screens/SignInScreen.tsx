import { StyleSheet, View, Alert } from 'react-native'
import React from 'react'
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

  const navigation = useNavigation<any>()

  const onBlur = () => {
    const email = getValues('email').trim()
    setValue('email', email)
  }

  const goToSignUp = () => navigation.navigate('SignUpScreen')

  const handleButton = async (data: formData) => {
    try {
      const response = await Auth.signIn(data.email, data.password)

      console.log(response)
    } catch (error: any) {
      Alert.alert(error.message)
    }
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
          inputContainerStyles={styles.email}
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
          inputContainerStyles={styles.password}
        />

        <Button
          text={i18n.t('continue')}
          onPress={handleSubmit(handleButton)}
        />

        <View style={styles.footerLinks}>
          <Button
            text={i18n.t('forgot password')}
            onPress={() => console.log('olvidar contraseña')}
            textStyle={styles.footerText}
            buttonStyle={[styles.footerButton, styles.forgotPassword]}
          />
          <Button
            text={i18n.t('register')}
            onPress={goToSignUp}
            textStyle={styles.footerText}
            buttonStyle={[styles.footerButton, styles.signUp]}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
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

  email: {
    marginTop: 35,
    marginBottom: 55
  },

  password: {
    marginBottom: '25%'
  },

  footerLinks: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },

  footerText: {
    color: '#338DFF',
    fontSize: 16
  },

  footerButton: {
    backgroundColor: 'none',
    paddingVertical: 0
  },

  forgotPassword: {
    maxWidth: '70%',
    marginBottom: 35
  },

  signUp: {
    alignSelf: 'center',
    width: '30%'
  }
})

export default SignInScreen
