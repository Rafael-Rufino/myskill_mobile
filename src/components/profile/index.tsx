import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles as S } from './styles'

export const Profile = () => {
  const [greeting, setGreeting] = useState('' as string)
  useEffect(() => {
    const currentHour = new Date().getHours()
    switch (true) {
      case currentHour < 12:
        setGreeting('Bom dia')
        break
      case currentHour >= 12 && currentHour < 18:
        setGreeting('Boa tarde')
        break
      default:
        setGreeting('Boa noite')
        break
    }
  }, [])
  return (
    <View style={S.container}>
      <Text style={S.text}>Olá, Rafael! </Text>
      <Text style={S.textHour}>{greeting}</Text>
    </View>
  )
}
