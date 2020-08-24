import TYPES from './cardActionsConstants'

const setApp = (config)=>({
    type: TYPES.INITIALIZE_APP,
    payload: config,
})

const setFlashCards = (database)=> dispatch => {
    if(database!==null){
        database.ref().once('child_added', (snap) => {
            const newFlashCards = snap.val()
            dispatch({type: TYPES.SET_FLASHCARDS, payload: newFlashCards})
        })
    }
}

const nextCard = ()=>({
    type: TYPES.NEXT_FLASHCARD,
})

export {setApp, setFlashCards, nextCard}

