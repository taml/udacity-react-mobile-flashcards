import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Deck(props) {
    const {singledeck } = props
    console.log(props)
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{padding: 10}} onPress={() => navigation.navigate('DeckDetail', {deckid: singledeck.title})}>
            <View>
                <Text>{singledeck.title}</Text>
                <Text>{singledeck.questions.length}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Deck