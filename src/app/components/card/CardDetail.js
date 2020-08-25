import React from 'react'
import Card from './Card'
import ProgressBar from './ProgressBar'
import './CardDetail.css'
import Button from '../button/Button'
import {showCurrentCard} from '../../redux/actions/cardActions'
import {connect} from 'react-redux'

function CardDetail({
    currentFlashCard,
    progress,
    totalCards,
    nextCard,
    hidden,
    showCard
}){
    return (
        <main className="main-content">
            { currentFlashCard &&
                <div className="deck">
                    <div className="other-card-2"></div>
                    <div className="other-card"></div>
                    <Card 
                        front={currentFlashCard.front}
                        back={currentFlashCard.back}
                        hidden={hidden}
                    />
                </div>
            }
            <ProgressBar 
                current={progress}
                total={totalCards}
            />
            {
                hidden?
                <Button
                    title="Mostrar"
                    action={showCard}
                /> :
                <Button
                    title="Marcar"
                    action={nextCard}
                />
            }
        </main>
    )
}

const mapDispatchToProps = (dispatch)=>({
    showCard: ()=>dispatch(showCurrentCard())
})

export default connect(null, mapDispatchToProps)(CardDetail)