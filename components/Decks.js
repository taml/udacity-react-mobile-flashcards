import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions/decks'
import { getDecks } from '../utils/api'

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
            <View>
                {console.log(decks)}
                <Text>Decks</Text>
                {Object.keys(decks).map((key) => 
                    <View key={key}>
                        <Text>{decks[key].title}</Text>
                        <Text>{decks[key].questions.length}</Text>
                    </View>
                )}
            </View>
        )
    }
}

function mapStateToProps( decks ) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(Decks)