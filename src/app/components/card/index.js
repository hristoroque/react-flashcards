import React from 'react'
import PropTypes from 'prop-types'

import './card.css'

Card.propTypes = {
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
}

function Card({card, cardStyle, hidden, cardState}) {

    const front = card.front
    const back = card.back

    let className = 'card'

    if(cardState === 'REMOVING_CARD'){
        className += ' removing-card'
    }

    return (
        <div 
            className="card-container" 
            style={cardStyle}
        >
            <div className={className}
                style={hidden ? {transform: 'rotateY(180deg)'} : {}}
            >
                <div className="front">
                    {front}
                </div>
                <div className="back">
                    {back}
                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    front: '',
    back: '',
}

export default Card