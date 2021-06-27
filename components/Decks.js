import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions/decks'
import { getDecks } from '../utils/api'
import Deck from './Deck'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { lighterPurple, blueGrey } from '../utils/colors'

class Decks extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        getDecks().then((results) => {
            dispatch(receiveDecks(results))
        })
    }
    render() {
        const { decks } = this.props
        if (Object.keys(decks).length === 0) {
            return(
                <View style={styles.emptyDeckContainer}>
                    <Ionicons name='chatbox-outline' size={60} color={lighterPurple} />
                    <Text style={styles.emptyDeckText}>You haven't added any Flashcard decks yet. Why not add one!</Text>
                </View>
            )
        }
        return(
            <View style={styles.deckContainer}>
                {console.log(decks)}
                <Text style={styles.deckText}>My Decks</Text>
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
    deckText: {
        fontWeight: '700', 
        fontSize: 20,
        paddingBottom: 16,
        color: blueGrey,
    },
    emptyDeckContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    emptyDeckText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: blueGrey,
    }
})

function mapStateToProps( decks ) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(Decks)