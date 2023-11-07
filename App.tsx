import { StatusBar, StyleSheet, View } from 'react-native'
import { Home } from './src/pages/home'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar barStyle="light-content" translucent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
