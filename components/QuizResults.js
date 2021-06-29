import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lighterPurple, blueGrey, white, purple } from '../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { checkForAndScheduleNotifications, cancelNotifications } from '../utils/notifications'

const QuizResults = (props) => {

    useEffect(() => {
        cancelNotifications().then(
            checkForAndScheduleNotifications()
        )
    })

    const { navigation, totalInDeck, score, deckTitle, handleQuizReset } = props

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                {score >= (totalInDeck / 2) ? <Ionicons name='thumbs-up-outline' size={60} color={lighterPurple} /> : 
                <Ionicons name='thumbs-down-outline' size={60} color={lighterPurple} />}
                <Text style={styles.deckText}>{`You got ${score} out of ${totalInDeck}!`}</Text>
            </View>
            <View>
                <TouchableOpacity style={[styles.mainDeckBtn, {marginBottom: 16}]} onPress={handleQuizReset} >
                    <Text style={styles.mainDeckBtnText}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DeckDetail', {deckid: deckTitle})}>
                    <Text style={styles.secondaryText}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    deckText: {
        fontWeight: '700', 
        fontSize: 20,
        paddingBottom: 16,
        textAlign: 'center',
        color: blueGrey,
    },
    secondaryText: {
        fontSize: 14,
        textAlign: 'center',
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
})

export default QuizResults