import { View, Text, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react'
import i18n from '../languages/i18n.config'
import { useForm } from 'react-hook-form'
import { EMAIL_REGEX } from '../constants'

//  component
import Input from '../components/common/Input'
import Button from '../components/common/Button'

type formData = {
  email: string,
  password: string,
  passwordRepeat: string
}

const SiginScreen = () => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm<formData>()

  const password = watch('password')

  console.log(errors)

  const submit = (data: formData) => {
    console.log(data)
  }

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.subtitle}>{i18n.t('enter a email and password')}</Text>

        <Input
          name='email'
          control={control}
          rules={{
            required: { value: true, message: i18n.t('this field is required') },
            pattern: { value: EMAIL_REGEX, message: i18n.t('enter a valid email') }
          }}
          placeholder={i18n.t('email')}
          inputStyles={styles.input}
          inputContainerStyles={styles.inputContainer}
        />
        <Input
          name='password'
          rules={{
            required: { value: true, message: i18n.t('this field is required') },
            minLength: { value: 8, message: i18n.t('password should be minimon 8 characters long') }
          }}
          control={control}
          placeholder={i18n.t('password')}
          secureTextEntry
          inputStyles={styles.input}
          inputContainerStyles={styles.inputContainer}
        />

        <Input
          name='passwordRepeat'
          rules={{
            required: { value: true, message: i18n.t('this field is required') },
            validate: (value: string) => value === password || i18n.t('password do not match')
          }}
          control={control}
          placeholder={i18n.t('password repeat')}
          secureTextEntry
          inputStyles={styles.input}
          inputContainerStyles={styles.inputContainer}
        />

        <Button text='Registrar' onPress={handleSubmit(submit)} buttonStyle={styles.buttonStyle} />
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  inner: {
    // flex: 1,
    paddingBottom: 15,
    paddingHorizontal: 10
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 65
  },

  input: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 10
  },

  inputContainer: {
    marginBottom: 45
  },

  buttonStyle: {
    marginTop: '15%'
  }
})

export default SiginScreen
