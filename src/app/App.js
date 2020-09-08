import React, {Fragment, useState, useEffect} from 'react'
//import {connect} from 'react-redux'
import Header from './components/header'
import CardsGamePanel from './components/cardsgamepanel'
import StackOfCards from './components/stackofcards'
import ButtonPanel from './components/buttonpanel'
import ProgressBar from './components/progressbar'
//import CardDetail from './components/card/CardDetail'
//import DBCONFIG from '../config/firebase/dbconfig'
//import {setApp, setFlashCards, nextCard} from './redux/actions/cardActions'

const cards = [
  {
    id: 1,
    'front': 'Pregunta 1',
    'back': 'Respuesta 1'
  },
  {
    id: 2,
    'front': 'Pregunta 2',
    'back': 'IHRFBDNDFSAKLFDJSALÑFJSDALÑFJDSALJFDSLAJFDSLÑAJFDSLAÑLFDJAÑLDAKJFDSLAKJFDSALÑFJDAÑLDJKFÑALSKFJ',
  },
  {
    id: 3,
    'front': 'Pregunta 3',
    'back': 'Respuesta 3',
  },
  {
    id: 4,
    'front': 'Pregutna 4',
    'back': 'Respuesta 4'
  },
  {
    id: 5,
    'front': 'Pregunta 5',
    'back': 'Respuesta 5',
  }
]

const states = {
  NEW_CARD: 'NEW_CARD',
  SHOWN_CARD: 'SHOWN_CARD',
  REMOVING_CARD: 'REMOVING_CARD',
  WON: 'WON',
}

function App() {

  const [currentCards, setCurrentCards] = useState([...cards])
  const [totalCards, setTotalCards] = useState([...cards])
  const [cardState, setCardState] = useState(states.NEW_CARD)

  const showCard = ()=>{
    setCardState(states.SHOWN_CARD)
  }

  const easy = ()=>{
    setCardState(states.REMOVING_CARD)
    setTimeout(()=>{
      setCardState(states.NEW_CARD)
      setCurrentCards(currentCards.slice(1))
    },1000)
  }

  const hard = ()=>{
    const newCards = [...currentCards]
    const badAnsweredCard = newCards.shift()
    newCards.push(badAnsweredCard)
    setCurrentCards(newCards)
    setCardState(states.NEW_CARD)
  }

  return (
    <Fragment>
      <Header/>
      <p>
        Estado actual: {cardState}
      </p>
      <CardsGamePanel>
        <StackOfCards currentCards={currentCards} cardState={cardState}/>
        <ButtonPanel 
          state={cardState} 
          states={states}
          showCard={showCard}
          easy={easy}
          hard={hard}
          />
        <ProgressBar
          total={totalCards.length}
          remaining={currentCards.length}
        />
      </CardsGamePanel>
    </Fragment>
  )
}

/*
const mapStateToProps = (state)=>({
  flashCards: state.flashCards,
  database: state.database,
  currentFlashCard: state.currentFlashCard,
  progress: state.currentFlashCardIndex,
  total: state.totalCards,
  hidden: state.currentCardIsHidden,
})

const mapDispatchToProps = (dispatch)=>({
  setApp: (config)=>dispatch(setApp(config)),
  setFlashCards: (database)=>dispatch(setFlashCards(database)),
  nextCard: ()=>dispatch(nextCard())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
*/
export default App;