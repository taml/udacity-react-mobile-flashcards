import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { deleteDeck } from '../utils/api'
import { removeDeck } from '../actions/decks'
import { connect } from 'react-redux'

export const AddQuestionBtn = (props) => {
    const { navigation, deckTitle } = props
    return(
        <TouchableOpacity onPress={() => navigation.navigate('NewQuestion', {deckid: deckTitle})}>
            <Text>Add New Question</Text>
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
        <TouchableOpacity onPress={() => handleDeleteDeck(dispatch, navigation, deckTitle)}>
            <Text>Remove This Deck</Text>
        </TouchableOpacity>
    )
}

class DeckDetail extends Component {
    render() {
        const { dispatch, deck, navigation } = this.props
        if(typeof deck === 'undefined') {
            return(
                <View>
                    <Text>Deck Not Found</Text>
                </View>
            )
        }
        const deckTitle = deck.title
        const totalInDeck = deck.questions.length
        return(
            <View>
                <Text>{`${totalInDeck} ${totalInDeck !== 1 ? 'Questions' : 'Question'} in this deck`}</Text>
                <AddQuestionBtn navigation={navigation} deckTitle={deckTitle} />
                <RemoveDeckBtn dispatch={dispatch} navigation={navigation} deckTitle={deckTitle} />
            </View>
        )
    }
}

const mapStateToProps = (decks, props) => {
    const deckTitle = props.route.params.deckid
    console.log(deckTitle)
    console.log(decks)
    return {
        deck: decks[deckTitle]
    }
}

export default connect(mapStateToProps)(DeckDetail)