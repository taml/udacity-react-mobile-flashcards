import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

export const AddQuestionBtn = (props) => {
    const { navigation, deckTitle } = props
    return(
        <TouchableOpacity onPress={() => navigation.navigate('NewQuestion', {deckid: deckTitle})}>
            <Text>Add New Question</Text>
        </TouchableOpacity>
    )
}

class DeckDetail extends Component {
    render() {
        const deckTitle = this.props.deck.title
        const { deck, navigation } = this.props
        const totalInDeck = deck.questions.length
        return(
            <View>
                <Text>{`${totalInDeck} ${totalInDeck !== 1 ? 'Questions' : 'Question'} in this deck`}</Text>
                <AddQuestionBtn navigation={navigation} deckTitle={deckTitle} />
            </View>
        )
    }
}

const mapStateToProps = (decks, props) => {
    const deckTitle = props.route.params.deckid
    console.log(deckTitle)
    console.log(decks)
    return {
        deck: decks[deckTitle]
    }
}

export default connect(mapStateToProps)(DeckDetail)