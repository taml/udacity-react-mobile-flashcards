import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'
import { submitDeck } from '../utils/api'
import { lighterPurple, blueGrey, darkBlueGrey, lightGrey, white, purple } from '../utils/colors'

const NewDeck = (props) => {
    const [deckTitle, setDeckTitle] = useState('')
    const isInputEmpty = deckTitle.length > 0 ? false : true

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
        <View style={styles.deckContainer}>
            <View style={{flex: 1}}>
                <Text style={styles.deckText}>Create A New Deck</Text>
                <Text style={styles.deckInputHeading}>New Deck Name</Text>
                <TextInput style={styles.deckInput} type='text' placeholder='E.g Animals' placeholderTextColor={blueGrey} value={deckTitle} onChangeText={handleDeckTitle} />
            </View>
            <TouchableOpacity style={[styles.mainDeckBtn, { backgroundColor: isInputEmpty ? lighterPurple : purple }]} disabled={isInputEmpty} onPress={handleDeckSubmit}>
                <Text style={styles.mainDeckBtnText}>Save New Deck</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        padding: 20,
    }, 
    deckText: {
        fontWeight: '700', 
        fontSize: 20,
        paddingBottom: 16,
        color: blueGrey,
        textAlign: 'center'
    },
    deckInput: {
        backgroundColor: lightGrey,
        padding: 16,
        fontSize: 16,
        color: blueGrey,
        textAlign: 'center',
        borderRadius: 8,
    },
    deckInputHeading: {
        fontSize: 12,
        color: darkBlueGrey,
        fontWeight: '200',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 8,
    },
    mainDeckBtn: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: lighterPurple,
    },
    mainDeckBtnText: {
        fontSize: 18,
        textAlign: 'center',
        color: white,
    }
})

export default connect()(NewDeck)