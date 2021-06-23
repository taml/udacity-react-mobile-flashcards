import AsyncStorage from '@react-native-async-storage/async-storage'

const DECK_STORAGE_KEY = 'MobileFlashcards:deck'

export const getDecks = async () => {
    try {
      const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY)
      return decks != null ? JSON.parse(decks) : null
    } catch(e) {
      // error reading value
    }
}

export const submitDeck = async (deck) => {
    try {
        const deckJSON = JSON.stringify({
            [deck.title]: deck
        })
        await AsyncStorage.mergeItem(DECK_STORAGE_KEY, deckJSON)
    } catch(e) {
       // error reading value 
    }
}