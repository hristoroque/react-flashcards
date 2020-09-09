import React from 'react'

import Card from './../card'
import './stackofcards.css'

function StackOfCards({currentCards, cardState}){

    const numberOfCards = currentCards.length
    const factor = 10

    return (
    <>
    { currentCards.length !== 0 ?
        <div className="stack">
            {
                currentCards.map((card, index) => (
                    <Card 
                        key={card.id} 
                        card={card}
                        cardStyle={{
                            zIndex: numberOfCards-index,
                            width: 450-index*factor,
                            filter: `brightness(${(numberOfCards-index*0.2)/numberOfCards})`,
                        }}
                        cardState={index===0 ? cardState : null}
                        hidden={(cardState === 'SHOWN_CARD' || cardState === 'REMOVING_CARD') && index===0 ? true : false}
                        style={numberOfCards-index}
                        width={450-index*factor}
                    />
                ))
            }
        </div>
        :
        <div className="stack">
            Yep, you did it.
        </div>
        }
        </>
    )
}

export default StackOfCards