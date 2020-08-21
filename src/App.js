import React, {useState, useEffect} from 'react';
import Card from './Components/Card/Card'
import './App.css'
import DBCONFIG from './Config/Firebase/dbconfig'
import firebase from 'firebase/app'
import 'firebase/database'

function App() {

  const [flashcards,setFlashCards] = useState([])
  const [currentFlashCard, setCurrentFlashCard] = useState(null)
  const [app,setApp] = useState(null)
  const [database,setDatabase] = useState(null)

  useEffect(()=>{
    const app = firebase.initializeApp(DBCONFIG)
    setApp(app)
    const database = app.database().ref().child('cards')
    setDatabase(database)
    console.log(database)
  },[])

  useEffect(()=>{
    if(database !== null) {
      const currentFlashCards = []
      
      database.on('child_added', snap => {
        currentFlashCards.push({
          id: snap.key,
          front: snap.val().front,
          back: snap.val().back,
        })
      })
      setFlashCards(currentFlashCards)
      setCurrentFlashCard(currentFlashCards[0])
    }
  },[database, flashcards])

  return (
    <>
      <div>
        Fash Cards
      </div>
      {
        currentFlashCard ? 
        <div>
          { <Card front={currentFlashCard.front} back={currentFlashCard.back} /> }
        </div>
        :
        <p> Cargando... </p>
      }
    </>
  );
}

export default App;
