import React from 'react'
import PropTypes from 'prop-types'

import './card.css'

Card.propTypes = {
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
}

function Card({card, cardStyle}) {

    const front = card.front
    const back = card.back
    const hidden = false

    return (
        <div 
            className="card-container" 
            style={cardStyle}
        >
            <div className="card">
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