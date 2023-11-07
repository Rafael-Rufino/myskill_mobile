import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  skillCard: {
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#151515',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  skill: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    paddingLeft: 20,
  },
  buttonSkill: {
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
})
