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
      <CardDetail currentFlashCard={currentFlashCard}/>
    </Fragment>
  );
}

const mapStateToProps = (state)=>({
  flashCards: state.flashCards,
  database: state.database,
  currentFlashCard: state.currentFlashCard,
})

const mapDispatchToProps = (dispatch)=>({
  setApp: (config)=>dispatch(setApp(config)),
  setFlashCards: (database)=>dispatch(setFlashCards(database)),
  nextCard: ()=>dispatch(nextCard())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);