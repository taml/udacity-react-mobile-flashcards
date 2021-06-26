import AsyncStorage from '@react-native-async-storage/async-storage'

const DECK_STORAGE_KEY = 'MobileFlashcards:deck'

export const getDecks = async () => {
    try {
      const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY)
      return decks != null ? JSON.parse(decks) : null
    } catch(e) {
      console.log(e)
    }
}

export const getDeck = async (deckid) => {
    try {
        const decks = await AsyncStorage.getItem(DECK_STORAGE_KEY)
        return decks != null ? JSON.parse(decks)[deckid] : null
    } catch(e) {
        console.log(e)
    }
}

export const submitDeck = async (deck) => {
    try {
        const deckJSON = JSON.stringify({
            [deck.title]: deck
        })
        await AsyncStorage.mergeItem(DECK_STORAGE_KEY, deckJSON)
    } catch(e) {
       console.log(e) 
    }
}

export const addQuestion = async (deckid, question) => {
    try {
        const deck = await getDeck(deckid)
        const questionJSON = JSON.stringify({
            [deckid]: {
                questions: [...deck.questions].concat(question)
            }
        })
        await AsyncStorage.mergeItem(DECK_STORAGE_KEY, questionJSON)
    } catch(e) {
        console.log(e)
    }
}