import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { blueGrey, darkBlueGrey, white } from '../utils/colors'

const Deck = (props) => {
    const {singledeck } = props
    const totalInDeck = singledeck.questions.length
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.deckCard} onPress={() => navigation.navigate('DeckDetail', {deckid: singledeck.title})}>
            <View>
                <Text style={styles.deckCardText}>{singledeck.title}</Text>
                <Text style={styles.deckCardSubText}>{`${totalInDeck} ${totalInDeck !== 1 ? 'Questions' : 'Question'} in this deck`}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deckCard: {
        backgroundColor: white,
        padding: 40,
        borderRadius: 8,
        marginBottom: 16,
    },
    deckCardText: {
        fontSize: 16,
        fontWeight: '500',
        color: blueGrey,
        paddingBottom: 8,
        textAlign: 'center',
    },
    deckCardSubText: {
        fontSize: 12,
        fontWeight: '200',
        color: darkBlueGrey,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
})

export default Deck