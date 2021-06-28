import React, {useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { addQuestion } from '../utils/api'
import { addQuestionToDeck } from '../actions/decks'
import { connect } from 'react-redux'
import { lighterPurple, purple, blueGrey, lightGrey, white, darkBlueGrey } from '../utils/colors'

const NewQuestion = (props) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const handleQuestion = (questionText) => {
        setQuestion(questionText)
    }

    const handleAnswer = (answerText) => {
        setAnswer(answerText)
    }

    const handleQuestionSubmit = () => {
        const { navigation, dispatch } = props
        const deckTitle = props.route.params.deckid
        const questionBody = {
            question,
            answer,
        }
        addQuestion(deckTitle, questionBody).then(() => dispatch(addQuestionToDeck(deckTitle, questionBody)))
        setQuestion('')
        setAnswer('')
        navigation.navigate('DeckDetail', {deckid: deckTitle})
    }


    return(
        <View style={styles.deckContainer}>
            <View style={{flex: 1}}>
                <Text style={styles.deckText}>Add New Question to Deck</Text>
                <Text style={styles.deckInputHeading}>Question</Text>
                <TextInput style={styles.deckInput} type='text' placeholder='E.g Which group of animal is called a business?' placeholderTextColor={blueGrey} value={question} onChangeText={handleQuestion} />
                <Text style={styles.deckInputHeading}>Answer</Text>
                <TextInput style={styles.deckInput} type='text' placeholder='E.g Ferrets' placeholderTextColor={blueGrey} value={answer} onChangeText={handleAnswer} />
            </View>
            <TouchableOpacity style={[styles.mainDeckBtn, { backgroundColor: question.length === 0 || answer.length === 0 ? lighterPurple : purple }]} disabled={question.length === 0 || answer.length === 0 ? true : false} onPress={handleQuestionSubmit}>
                <Text style={styles.mainDeckBtnText}>Save Question</Text>
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
        marginBottom: 16,
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

export default connect()(NewQuestion)