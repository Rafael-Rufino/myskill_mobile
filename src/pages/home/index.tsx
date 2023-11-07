import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

import { Button, Input, Profile, SkillCard } from '../../components'

import { styles as S } from './styles'

interface SkillData {
  id: string
  name: string
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState('' as string)
  const [mySkills, setMySkills] = useState<SkillData[]>([])

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    let skillAlreadyExists = mySkills.find((skill) => skill.name === data.name)
    setMySkills(
      skillAlreadyExists ? [...mySkills] : ([...mySkills, data] as SkillData[])
    )
  }

  const handleRemoveSkill = (id: string) => {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id))
  }

  return (
    <View style={S.container}>
      <Profile />
      <View style={S.wrapper}>
        <Input onChangeText={setNewSkill} />
        <Button onPress={handleAddNewSkill} name="Add +" />
      </View>

      <Text style={S.sectionTitle}>My Skills</Text>
      <View style={S.containerSkills}>
        <FlatList
          data={mySkills}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SkillCard
              skill={item.name}
              handleRemoveSkill={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      </View>
    </View>
  )
}
