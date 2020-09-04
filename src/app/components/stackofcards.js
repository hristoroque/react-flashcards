import React from 'react'

import Card from '../components/card'

function StackOfCards({currentCards}){

    const numberOfCards = currentCards.length
    const factor = 20

    return (
        <div className="stack">
            {
                currentCards.map((card, index) => (
                    <Card 
                        key={index} 
                        card={card}
                        cardStyle={{
                            zIndex: numberOfCards-index,
                            width: 450-index*factor,
                            filter: `brightness(${(numberOfCards-index)/numberOfCards})`,
                        }} 
                        style={numberOfCards-index}
                        width={450-index*factor}
                    />
                ))
            }
        </div>
    )
}

export default StackOfCards