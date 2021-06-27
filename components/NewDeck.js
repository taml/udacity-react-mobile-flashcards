import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'
import { submitDeck } from '../utils/api'

const NewDeck = (props) => {
    const [deckTitle, setDeckTitle] = useState('')

    const handleDeckTitle = (deckTitleText) => {
        setDeckTitle(deckTitleText)
    }

    const handleDeckSubmit = async () => {
        const { dispatch, navigation } = props
        const deck = {title: deckTitle, questions: []}
        await submitDeck(deck)
        dispatch(addDeck(deck))
        setDeckTitle('')
        navigation.navigate('DeckDetail', {deckid: deck.title})
    }

    return(
        <View>
            <Text>Create A New Deck</Text>
            <TextInput type='text' placeholder='E.g Animals' value={deckTitle} onChangeText={handleDeckTitle} />
            <Button title='Add New Deck' disabled={deckTitle.length > 0 ? false : true} onPress={handleDeckSubmit} />
        </View>
    )
    
}

export default connect()(NewDeck)