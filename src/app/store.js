import {createStore} from 'redux'


const initialState = {
    name: "Hristo Roque"
}

function reducer(state = initialState, action){
    switch(action.type){
        case "PRUEBA":
            return {...state, name: action.payload}
        default:
            return state
    }
}

export default createStore(reducer)