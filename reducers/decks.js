import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION_TO_DECK, DELETE_DECK } from '../actions/decks'

function decks(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS: 
            return {
                ...state,
                ...action.decks,
            }
        case ADD_DECK: 
            return {
                ...state,
                [action.deck.title]: action.deck,
            }
        case ADD_QUESTION_TO_DECK:
            const { deckTitle, question } = action
            const updatedDeck = {
                ...state,
                [deckTitle]: {
                    ...state[deckTitle],
                    questions: state[deckTitle].questions.concat(question)
                }
            }
            return {
                ...state,
                ...updatedDeck,
            }
        case DELETE_DECK:
            delete state[action.decktitle]
            return {
                ...state,
            }
        default:
            return state
    }
}

export default decks