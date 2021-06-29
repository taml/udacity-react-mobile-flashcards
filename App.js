import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { DecksFlow } from './routes/router'
import { NavigationContainer } from '@react-navigation/native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/decks'
import { purple } from './utils/colors'
import { checkForAndScheduleNotifications } from './utils/notifications'

export default function App() {
  const store = createStore(reducer)

  useEffect(() => {
    checkForAndScheduleNotifications()
  })

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={purple} />
        <NavigationContainer>
          <DecksFlow />
        </NavigationContainer>
    </Provider>
  )
}
