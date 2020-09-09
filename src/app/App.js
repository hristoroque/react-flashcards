import React, {Fragment, useState} from 'react'
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
    'front': 'What is React?',
    'back': 'It\'s a javascript library that you make ui interfaces with'
  },
  {
    id: 2,
    'front': 'What does the css backface-visibility do?',
    'back': 'It defines whether or not the back face of the element will be visible when facing the user',
  },
  {
    id: 3,
    'front': 'What is firebase?',
    'back': 'It\'s a platform provided by google that helps you create mobile or web apps by giving you services like databases',
  },
  {
    id: 4,
    'front': 'What is redux?',
    'back': 'It\'s a state management framework'
  },
  {
    id: 5,
    'front': 'What does the key property do in react components',
    'back': 'It assigns an identifier so that react knows the elements that have changed in a mapped array',
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
  const [totalCards] = useState([...cards])
  const [cardState, setCardState] = useState(states.NEW_CARD)

  const showCard = ()=>{
    setCardState(states.SHOWN_CARD)
  }

  const easy = ()=>{
    const remainingCards = currentCards.slice(1)
    setCurrentCards(remainingCards)
    if(remainingCards.length > 0){
      setCardState(states.NEW_CARD)
    }
    else{
      setCardState(states.WON)
    }
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