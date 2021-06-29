import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { deleteDeck } from '../utils/api'
import { removeDeck } from '../actions/decks'
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { purple, blueGrey, darkBlueGrey, white, lighterPurple } from '../utils/colors'

export const AddQuestionBtn = (props) => {
    const { navigation, deckTitle } = props
    return(
        <TouchableOpacity style={styles.mainDeckBtn} onPress={() => navigation.navigate('NewQuestion', {deckid: deckTitle})}>
            <Text style={styles.mainDeckBtnText}>+ Add New Question</Text>
        </TouchableOpacity>
    )
}

const handleDeleteDeck = (dispatch, navigation, deckTitle) => {
    dispatch(removeDeck(deckTitle))
    navigation.navigate('DecksHome')
    deleteDeck(deckTitle)
}

export const RemoveDeckBtn = (props) => {
    const { dispatch, navigation, deckTitle } = props
    return(
        <TouchableOpacity style={{padding: 10}} onPress={() => handleDeleteDeck(dispatch, navigation, deckTitle)}>
            <Text style={styles.removeDeckText}>🗑️ Remove This Deck</Text>
        </TouchableOpacity>
    )
}

export const StartQuizBtn = (props) => {
    const { navigation, deck } = props
    return(
        <TouchableOpacity style={[styles.mainDeckBtn, {backgroundColor: blueGrey, marginBottom: 20}]} onPress={() => navigation.navigate('QuestionsQuiz', {deck: deck})}>
            <Text style={styles.mainDeckBtnText}>Start Quiz</Text>
        </TouchableOpacity>
    )
}

class DeckDetail extends Component {
    render() {
        const { dispatch, deck, navigation } = this.props
        if(typeof deck === 'undefined') {
            return(
                <View style={styles.emptyDeckContainer}>
                    <Ionicons name='chatbox-outline' size={60} color={lighterPurple} />
                    <Text style={styles.emptyDeckText}>Deck Not Found</Text>
                </View>
            )
        }
        const deckTitle = deck.title
        const totalInDeck = deck.questions.length
        return(
            <View style={styles.deckContainer}>
                <View style={{flex: 1}}>
                    <Text style={styles.deckText}>{`${totalInDeck} ${totalInDeck !== 1 ? 'Questions' : 'Question'} in this deck`}</Text>
                    {totalInDeck !== 0 &&
                        <View>
                            <StartQuizBtn navigation={navigation} deck={deck} />
                        </View>
                    }
                    <RemoveDeckBtn dispatch={dispatch} navigation={navigation} deckTitle={deckTitle} />
                </View>
                <AddQuestionBtn navigation={navigation} deckTitle={deckTitle} />
            </View>
        )
    }
}

const mapStateToProps = (decks, props) => {
    const deckTitle = props.route.params.deckid
    return {
        deck: decks[deckTitle]
    }
}

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        padding: 20,
    }, 
    deckText: {
        fontWeight: '200', 
        fontSize: 16,
        paddingBottom: 16,
        color: darkBlueGrey,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    emptyDeckContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    emptyDeckText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: blueGrey,
    },
    mainDeckBtn: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: purple,
    },
    mainDeckBtnText: {
        fontSize: 18,
        textAlign: 'center',
        color: white,
    }, 
    removeDeckText: {
        fontSize: 14,
        textAlign: 'center',
        color: blueGrey,
    }
})

export default connect(mapStateToProps)(DeckDetail)