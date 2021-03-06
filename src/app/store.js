import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cardsReducers from './redux/reducers/cardsReducers'

const initialState = {
    app: null,
    database: null,
    flashCards: [],
    currentFlashCard: null,
    currentFlashCardIndex: 0,
    currentCardIsHidden: true,
    totalCards: 0,
}

export default createStore(cardsReducers, initialState, applyMiddleware(thunk))