import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lighterPurple, blueGrey, darkBlueGrey, white, purple, green, red } from '../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
        const totalInDeck = deck.questions.length
        return(
            
            <View style={styles.deckContainer}>
                {questionsIterator === totalInDeck ? 
                    <View style={{flex: 1}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            {score >= (deck.questions.length / 2) ? <Ionicons name='thumbs-up-outline' size={60} color={lighterPurple} /> : 
                            <Ionicons name='thumbs-down-outline' size={60} color={lighterPurple} />}
                            <Text style={styles.deckText}>{`You got ${score} out of ${totalInDeck}!`}</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={[styles.mainDeckBtn, {marginBottom: 16}]} onPress={this.handleQuizReset} >
                                <Text style={styles.mainDeckBtnText}>Restart Quiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('DeckDetail', {deckid: deck.title})}>
                                <Text style={styles.secondaryText}>Back to Deck</Text>
                            </TouchableOpacity>
                        </View>
                    </View> : 
                    <View style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <Text style={styles.remainingText}>{`${totalInDeck - questionsIterator} / ${totalInDeck} Questions Remaining`}</Text>
                            <Text style={styles.deckText}>{deck.questions[questionsIterator].question}</Text>
                            <TouchableOpacity onPress={this.handleShowAnswer}>
                                <Text style={styles.secondaryText}>{`🔍 ${showAnswer ? 'Hide' : 'Reveal'} Answer`}</Text>
                            </TouchableOpacity>
                            {showAnswer && 
                                <Text style={styles.answerText}>
                                    {deck.questions[questionsIterator].answer}
                                </Text>
                            }
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity style={[styles.mainDeckBtn, {backgroundColor: red, flex: 1, marginRight: 10}]} onPress={this.handleIncorrectAnswer}>
                                <Text style={styles.mainDeckBtnText}>Incorrect</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.mainDeckBtn, {backgroundColor: green, flex: 1, marginLeft: 10}]} onPress={this.handleCorrectAnswer}> 
                                <Text style={styles.mainDeckBtnText}>Correct</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        )
    }
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
        textAlign: 'center',
        color: blueGrey,
    },
    secondaryText: {
        fontSize: 14,
        textAlign: 'center',
        color: blueGrey,
    },
    remainingText: {
        alignSelf: 'flex-end',
        fontWeight: '200', 
        fontSize: 12,
        paddingBottom: 16,
        color: darkBlueGrey,
        textTransform: 'uppercase',
    },
    answerText: {
        alignSelf: 'flex-end',
        fontWeight: '200', 
        fontSize: 14,
        paddingTop: 16,
        color: darkBlueGrey,
        textTransform: 'uppercase',
        alignSelf: 'center'
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

export default QuestionsQuiz
