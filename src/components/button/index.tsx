import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles as S } from './styles'

type Props = TouchableOpacityProps & {
  name: string
  onPress: () => void
}

export const Button = ({ name, onPress, ...rest }: Props) => {
  return (
    <TouchableOpacity
      style={S.background}
      onPress={onPress}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={S.buttonText}>{name}</Text>
    </TouchableOpacity>
  )
}
