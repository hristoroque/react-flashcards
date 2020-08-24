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
            return newState
        case TYPES.NEXT_FLASHCARD:
            newState.currentFlashCardIndex += 1
            newState.currentFlashCard = newState.flashCards[newState.currentFlashCardIndex % newState.flashCards.length]
            return newState
        default:
            return state
    }
}