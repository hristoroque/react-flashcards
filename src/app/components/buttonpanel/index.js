import React from 'react'

import Button from '../button'
import './buttonpanel.css'

function ButtonPanel({
    state,
    states,
    showCard,
    easy,
    hard,
}){
    let buttons
    switch(state){
        case states.NEW_CARD:
            buttons = (
                <Button title="Show Card" action={showCard}/>
            )
            break
        case states.SHOWN_CARD:
            buttons = (
                <div>
                    <Button title="Done" action={easy}/>
                    <Button title="Not Done" action={hard}/>
                </div>
            )
            break
        case states.WON:
            console.log("You f won")
            buttons = 'You won, for the moment, you\'ll have to reload the page'
            break
        default:
            buttons = <div>Something went wrong</div>
    }

    return (
        <div className="buttonpanel">
            {buttons}
        </div>
    )
}

export default ButtonPanel