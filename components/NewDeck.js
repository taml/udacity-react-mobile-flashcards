import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'
import { submitDeck } from '../utils/api'

const NewDeck = (props) => {
    const [deckTitle, setDeckTitle] = useState('')

    const handleDeckTitle = (e) => {
        e.preventDefault()
        const newDeckTitle = e.target.value
        setDeckTitle(newDeckTitle)
    }

    const handleDeckSubmit = (e) => {
        e.preventDefault()
        const { dispatch, navigation } = props
        const deck = {title: deckTitle, questions: []}
        submitDeck(deck).then(() => dispatch(addDeck(deck)))
        setDeckTitle('')
        navigation.navigate('DeckDetail', {deckid: deck.title})
    }

    return(
        <View>
            <form onSubmit={handleDeckSubmit}>
                <Text>Create A New Deck</Text>
                <input type='text' placeholder='E.g Animals' value={deckTitle} onChange={handleDeckTitle} />
                <button type='submit' disabled={deckTitle.length > 0 ? false : true}>Add New Deck</button>
            </form>
        </View>
    )
    
}

export default connect()(NewDeck)