import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Decks from '../components/Decks'
import NewDeck from '../components/NewDeck'
import DeckDetail from '../components/DeckDetail'
import QuestionsQuiz from '../components/QuestionsQuiz'
import NewQuestion from '../components/NewQuestion'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { purple, lighterPurple, blueGrey, white } from '../utils/colors'

const MainTabs = createBottomTabNavigator()

export const Tabs = () => (
    <MainTabs.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Decks') {
                iconName = focused
                    ? 'albums'
                    : 'albums-outline'
            } else if (route.name === 'NewDeck') {
                iconName = focused ? 'add-circle' : 'add-circle-outline'
            }
                return <Ionicons name={iconName} size={size} color={color} />
            },
        })}
        tabBarOptions={{
            activeTintColor: lighterPurple,
            inactiveTintColor: blueGrey,
        }}>
        <MainTabs.Screen name="Decks" component={Decks} />
        <MainTabs.Screen name="NewDeck" component={NewDeck} />
    </MainTabs.Navigator>
)

const DeckStack = createStackNavigator()

export const DecksFlow = () => {
    return (
        <DeckStack.Navigator initialRouteName="DecksHome">
            <DeckStack.Screen name="DecksHome" component={Tabs} 
                options={{
                    title: 'Mobile Flashcards',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: white,
                    },
                    headerStyle: {
                        borderBottomColor: 'transparent',
                        backgroundColor: purple,
                        
                }
            }}/>
            <DeckStack.Screen name="DeckDetail" component={DeckDetail} 
                options={({ route }) => ({ 
                    title: route.params.deckid,
                    headerTitleStyle: {
                        color: white,
                    },
                    headerStyle: {
                        borderBottomColor: 'transparent',
                        backgroundColor: purple,
                } 
            })} />
            <DeckStack.Screen name="QuestionsQuiz" component={QuestionsQuiz} 
                options={{
                    title: 'Quiz',
                    headerTitleStyle: {
                        color: white,
                    },
                    headerStyle: {
                        borderBottomColor: 'transparent',
                        backgroundColor: purple,
                } 
            }} />
            <DeckStack.Screen name="NewQuestion" component={NewQuestion} 
                options={{
                    title: 'Add New Question',
                    headerTitleStyle: {
                        color: white,
                    },
                    headerStyle: {
                        borderBottomColor: 'transparent',
                        backgroundColor: purple,
                } 
            }} />
        </DeckStack.Navigator>
    )
}

const NewDeckStack = createStackNavigator()

export const NewDeckFlow = () => {
  return (
        <NewDeckStack.Navigator initialRouteName="CreateNewDeck">
            <NewDeckStack.Screen name="CreateNewDeck" component={Tabs} 
                options={{
                    title: 'Mobile Flashcards',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: white,
                    },
                    headerStyle: {
                        borderBottomColor: 'transparent',
                        backgroundColor: purple,
                    }
            }} />
            <NewDeckStack.Screen name="DeckDetail" component={DeckDetail} 
                options={({ route }) => ({ 
                    title: route.params.deckid,
                    headerTitleStyle: {
                        color: white,
                    },
                    headerStyle: {
                        borderBottomColor: 'transparent',
                        backgroundColor: purple,
                    } 
            })} />
            <NewDeckStack.Screen name="QuestionsQuiz" component={QuestionsQuiz} 
                options={{
                    title: 'Quiz',
                    headerTitleStyle: {
                        color: white,
                    },
                    headerStyle: {
                        borderBottomColor: 'transparent',
                        backgroundColor: purple,
                } 
            }} />
            <NewDeckStack.Screen name="NewQuestion" component={NewQuestion} 
                options={{
                title: 'Add New Question',
                headerTitleStyle: {
                    color: white,
                },
                headerStyle: {
                    borderBottomColor: 'transparent',
                    backgroundColor: purple,
                } 
            }} />
        </NewDeckStack.Navigator>
    )
}

