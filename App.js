import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Tabs } from './routes/router'
import { NavigationContainer } from '@react-navigation/native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/decks'

export default function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
      <View>
          <StatusBar backgroundColor='#000000' />
      </View>
      <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    </Provider>
  )
}
