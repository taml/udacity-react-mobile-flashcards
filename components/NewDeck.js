import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'

class NewDeck extends Component {
    state = {
        deckTitle: ''
    }

    handleDeckTitle = (e) => {
        e.preventDefault()
        const deckTitle = e.target.value
        this.setState(() => ({
            deckTitle
        }))
    }

    handleDeckSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { deckTitle } = this.state
        dispatch(addDeck(deckTitle))
        this.setState(() => ({
            deckTitle: ''
        }))
    }

    render() {
        const { deckTitle } = this.state
        return(
            <View>
                <form onSubmit={this.handleDeckSubmit}>
                    <Text>Create A New Deck</Text>
                    <input type='text' placeholder='E.g Animals' value={deckTitle} onChange={this.handleDeckTitle} />
                    <button type='submit' disabled={deckTitle.length > 0 ? false : true}>Add New Deck</button>
                </form>
            </View>
        )
    }
}

export default connect()(NewDeck)