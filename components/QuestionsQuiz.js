import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

class QuestionsQuiz extends Component {
    state = {
        score: 0,
        questionsIterator: 0,
        showAnswer: false,
    }

    handleCorrectAnswer = () => {
        this.setState((prev) => ({
            questionsIterator: prev.questionsIterator + 1, 
            score: prev.score + 1, 
            showAnswer: false,
        }))
    }

    handleIncorrectAnswer = () => {
        this.setState((prev) => ({
            questionsIterator: prev.questionsIterator + 1,
            showAnswer: false,
        }))
    }

    handleShowAnswer = () => {
        this.setState((prev) => ({
            showAnswer: !prev.showAnswer,
        })) 
    }

    handleQuizReset = () => {
        this.setState(() => ({
            questionsIterator: 0,
            score: 0, 
            showAnswer: false,
        }))
    }

    render() {
        const { navigation } = this.props
        const deck = this.props.route.params.deck
        const { score, questionsIterator, showAnswer } = this.state
        return(
            
            <View>
                {questionsIterator === deck.questions.length ? 
                    <View>
                        <Text>{`You got ${score} out of ${deck.questions.length}!`}</Text>
                        <Button title='Restart Quiz' onPress={this.handleQuizReset} />
                        <Button title='Back to Deck' onPress={() => navigation.navigate('DeckDetail', {deckid: deck.title})}/>
                    </View> : 
                    <View>
                        {console.log(questionsIterator)}
                        <Text>{deck.questions[questionsIterator].question}</Text>
                        <TouchableOpacity onPress={this.handleShowAnswer}>
                            <Text>{`${showAnswer ? 'Hide' : 'Reveal'} Answer`}</Text>
                        </TouchableOpacity>
                        {showAnswer && 
                            <Text>
                                {deck.questions[questionsIterator].answer}
                            </Text>
                        }
                        <Button title='Correct' onPress={this.handleCorrectAnswer} />
                        <Button title='Incorrect' onPress={this.handleIncorrectAnswer} />
                    </View>
                }
            </View>
        )
    }
}

export default QuestionsQuiz
