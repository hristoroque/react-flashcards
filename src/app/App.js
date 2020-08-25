import React,{Fragment,useEffect} from 'react'
import {connect} from 'react-redux'
import Header from './components/header/Header'
import CardDetail from './components/card/CardDetail'
import DBCONFIG from '../config/firebase/dbconfig'
import {setApp, setFlashCards, nextCard} from './redux/actions/cardActions'

function App(props) {

  const setApp = props.setApp
  const setFlashCards = props.setFlashCards
  const database = props.database
  const currentFlashCard = props.currentFlashCard
  const nextCard = props.nextCard

  useEffect(()=>{
    setApp(DBCONFIG)
  },[setApp])

  useEffect(()=>{
    setFlashCards(database)
  },[database, setFlashCards])

  return (
    <Fragment>
      <Header/>
      <CardDetail 
      currentFlashCard={currentFlashCard}
      progress={props.progress}
      totalCards={props.total}
      nextCard={nextCard}
      hidden={props.hidden}
      />
    </Fragment>
  );
}

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