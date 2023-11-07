import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { styles as S } from './styles'

type Props = TextInputProps

export const Input = ({ onChangeText, ...rest }: Props) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      style={S.input}
      placeholder="New skill"
      placeholderTextColor="#555"
      {...rest}
    />
  )
}
