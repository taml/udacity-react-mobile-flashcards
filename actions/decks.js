export const RECEIVE_DECKS  = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK'
export const DELETE_DECK = 'DELETE_DECK'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addQuestionToDeck(deckTitle, question) {
    return {
        type: ADD_QUESTION_TO_DECK,
        deckTitle,
        question,
    }
}

export function removeDeck(decktitle) {
    return {
        type: DELETE_DECK,
        decktitle,
    }
}