import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Decks from '../components/Decks'
import NewDeck from '../components/NewDeck'
import DeckDetail from '../components/DeckDetail'

const MainTabs = createBottomTabNavigator()

export const Tabs = () => (
    <MainTabs.Navigator>
        <MainTabs.Screen name="Decks" component={DecksFlow} />
        <MainTabs.Screen name="NewDeck" component={NewDeckFlow} />
    </MainTabs.Navigator>
)

const DeckStack = createStackNavigator()

export const DecksFlow = () => {
    return (
        <DeckStack.Navigator initialRouteName="DecksHome">
          <DeckStack.Screen name="DecksHome" component={Decks} 
          options={{
            title: 'Decks',
            headerShown: false,
          }}/>
          <DeckStack.Screen name="DeckDetail" component={DeckDetail} 
            options={({ route }) => ({ 
              title: route.params.deckid 
            })} />
        </DeckStack.Navigator>
    )
}

const NewDeckStack = createStackNavigator()

export const NewDeckFlow = () => {
  return (
      <NewDeckStack.Navigator initialRouteName="CreateNewDeck">
        <NewDeckStack.Screen name="CreateNewDeck" component={NewDeck} 
          options={{
            title: 'New Deck',
            headerShown: false,
          }} />
        <NewDeckStack.Screen name="DeckDetail" component={DeckDetail} 
          options={({ route }) => ({ 
            title: route.params.deckid 
          })} />
      </NewDeckStack.Navigator>
  )
}

