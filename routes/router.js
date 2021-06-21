import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Decks from '../components/Decks'
import NewDeck from '../components/NewDeck'

const MainTabs = createBottomTabNavigator()

export const Tabs = () => (
    <MainTabs.Navigator>
        <MainTabs.Screen name="Decks" component={Decks} />
        <MainTabs.Screen name="NewDeck" component={NewDeck} />
    </MainTabs.Navigator>
)

