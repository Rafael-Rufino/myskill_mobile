import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  text: {
    color: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'orange',
    backgroundColor: '#1f1E25',
    padding: Platform.OS === 'ios' ? 15 : 10,
    color: '#FFF',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
})
