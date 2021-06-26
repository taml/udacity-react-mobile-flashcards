import React, {useState } from 'react'
import { View, Text } from 'react-native'
import { addQuestion } from '../utils/api'
import { addQuestionToDeck } from '../actions/decks'
import { connect } from 'react-redux'

function NewQuestion(props) {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const handleQuestion = (e) => {
        e.preventDefault()
        const newQ = e.target.value
        setQuestion(newQ)
    }

    const handleAnswer = (e) => {
        e.preventDefault()
        const newA = e.target.value
        setAnswer(newA)
    }

    const handleQuestionSubmit = (e) => {
        e.preventDefault()
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
            <form onSubmit={handleQuestionSubmit}>
                <Text>Add New Question to Deck</Text>
                <textarea type='text' placeholder='E.g Which group of animal is called a business?' value={question} onChange={handleQuestion} />
                <textarea type='text' placeholder='E.g Ferrets' value={answer} onChange={handleAnswer} />
                <button type='submit' disabled={question.length === 0 || answer.length === 0 ? true : false}>Add New Question</button>
            </form>
        </View>
    )
}

export default connect()(NewQuestion)