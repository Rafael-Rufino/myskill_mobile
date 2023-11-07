import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import { styles as S } from './styles'

type SkillCardProps = {
  skill: string
  handleRemoveSkill: (id: string) => void
}

export const SkillCard = ({ skill, handleRemoveSkill }: SkillCardProps) => {
  return (
    <View style={S.skillCard}>
      <Text style={S.skill}>{skill}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleRemoveSkill(skill)}
        style={S.buttonSkill}
      >
        <Text style={S.text}>X</Text>
      </TouchableOpacity>
    </View>
  )
}
