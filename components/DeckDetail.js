import React from 'react'
import { View, Text } from 'react-native'

function DeckDetail(props) {
    const { navigate, route } = props
    console.log(route.params.deckid)
    return(
        <View>
            <Text>Deck Detail</Text>
        </View>
    )
}

export default DeckDetail