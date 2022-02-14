import { View, Text } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'

//  components
import Input from '../components/common/Input'

const ConfirmCodeScreen = () => {
  const { control, handleSubmit } = useForm()

  return (
    <View>
      <Text>ConfirmCodeScreen</Text>
      <Input
        name='email'
        control={control}
      />
    </View>
  )
}

export default ConfirmCodeScreen
