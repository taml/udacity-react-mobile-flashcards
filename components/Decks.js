import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions/decks'
import { getDecks } from '../utils/api'
import Deck from './Deck'

class Decks extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        getDecks().then((results) => {
            dispatch(receiveDecks(results))
        })
    }
    render() {
        const { decks } = this.props
        return(
            <View style={styles.deckContainer}>
                {console.log(decks)}
                <Text style={{fontWeight: 700, fontSize: 22}}>Decks</Text>
                <ScrollView>
                    {Object.keys(decks).map((key) => 
                        <Deck key={key} singledeck={decks[key]} />
                    )}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        padding: 20,
    }, 
})

function mapStateToProps( decks ) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(Decks)