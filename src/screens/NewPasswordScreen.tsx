import { View, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { EMAIL_REGEX } from '../constants'
import i18n from '../languages/i18n.config'

//  components
import Input from '../components/common/Input'
import Button from '../components/common/Button'

const NewPasswordScreen = () => {
  const { control, handleSubmit, getValues, setValue } = useForm()
  const navigation = useNavigation<any>()

  const onBlur = () => {
    const email = getValues('email').trim()
    setValue('email', email)
  }

  const onSubmitPressed = async (data: any) => {
    try {
      await Auth.forgotPasswordSubmit(data.email, data.code, data.password)
      navigation.navigate('SignInScreen')
    } catch (error: any) {
      Alert.alert('Opps', error.message)
    }
  }

  return (
    <KeyboardAwareScrollView style={styles.root}>
      <View style={styles.container}>
        <Input
          control={control}
          name='code'
          placeholder='Code'
          inputStyles={styles.input}
          inputContainerStyles={styles.inputContainer}
          autoCapitalize='none'
          rules={{
            required: { value: true, message: 'code is required' }
          }}
        />

        <Input
          control={control}
          name='email'
          placeholder='email'
          inputStyles={styles.input}
          autoCapitalize='none'
          rules={{
            required: { value: true, message: i18n.t('the email is required') },
            pattern: { value: EMAIL_REGEX, message: i18n.t('enter a valid email') }
          }}
          onBlur={onBlur}
        />

        <Input
          name='password'
          control={control}
          placeholder='Enter your new password'
          rules={{
            required: { value: true, message: i18n.t('the password is required') },
            minLength: { value: 8, message: i18n.t('password should be minimon 8 characters long') }
          }}
          secureTextEntry
          inputStyles={styles.input}
          inputContainerStyles={styles.inputContainer}
        />

        <Button
          text='Submit'
          onPress={handleSubmit(onSubmitPressed)}
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

  inputContainer: {
    marginTop: 35,
    marginBottom: 35
  },

  sendButton: {
    alignSelf: 'center',
    marginTop: 25
  }
})

export default NewPasswordScreen
