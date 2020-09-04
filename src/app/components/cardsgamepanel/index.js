import React from 'react'

import './cardsgamepanel.css'

function CardsGamePanel({children}){
    return (
        <div className="cardsgamepanel">
            {children}
        </div>
    )
}

export default CardsGamePanel