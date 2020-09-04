import React from 'react'

import Button from '../components/button'

function ButtonPanel({
    state,
    states,
    showCard,
    easy,
    hard,
}){
    switch(state){
        case states.NEW_CARD:
            return (
                <div>
                    <Button title="Show Card" action={showCard}/>
                </div>
            )
        case states.SHOWN_CARD:
            return (
                <div>
                    <Button title="Easy" action={easy}/>
                    <Button title="Impossible" action={hard}/>
                </div>
            )
        default:
            return <div>Something went wrong</div>
    }
}

export default ButtonPanel