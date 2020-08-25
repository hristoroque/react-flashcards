import TYPES from '../actions/cardActionsConstants'
import {initializeApp, database} from 'firebase'

export default (state, action)=>{
    const newState = {...state}

    switch(action.type){
        case TYPES.INITIALIZE_APP:
            newState.app = initializeApp(action.payload)
            newState.database = database(newState.app)
            return newState
        case TYPES.SET_FLASHCARDS:
            const flashCards = action.payload
            newState.flashCards = flashCards
            newState.currentFlashCard = flashCards[newState.currentFlashCardIndex]
            newState.totalCards = flashCards.length
            return newState
        case TYPES.NEXT_FLASHCARD:
            newState.currentCardIsHidden = true
            newState.currentFlashCardIndex += 1
            newState.currentFlashCardIndex %= newState.flashCards.length
            newState.currentFlashCard = newState.flashCards[newState.currentFlashCardIndex]
            return newState
        case TYPES.SHOW_CURRENT_CARD:
            newState.currentCardIsHidden = false
            return newState
        default:
            return state
    }
}