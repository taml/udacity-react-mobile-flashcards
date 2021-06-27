import React, {useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { addQuestion } from '../utils/api'
import { addQuestionToDeck } from '../actions/decks'
import { connect } from 'react-redux'

function NewQuestion(props) {
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
        <View>
            <Text>Add New Question to Deck</Text>
            <TextInput type='text' placeholder='E.g Which group of animal is called a business?' value={question} onChangeText={handleQuestion} />
            <TextInput type='text' placeholder='E.g Ferrets' value={answer} onChangeText={handleAnswer} />
            <Button title='Add New Question' disabled={question.length === 0 || answer.length === 0 ? true : false} onPress={handleQuestionSubmit} />
        </View>
    )
}

export default connect()(NewQuestion)