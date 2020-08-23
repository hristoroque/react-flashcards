import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

Card.propTypes = {
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
}

function Card({front, back, hidden = true}){
    return (
        <div>
            <div className="card-container">
                <div className="card"
                    style={hidden ? {} : {transform: "rotateY(180deg)"}}
                >
                    <div className="front">
                        {front}
                    </div>
                    <div className="back">
                        {back}
                    </div>
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