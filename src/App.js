import React, {useState, useEffect} from 'react';
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import CardDetail from './Components/Card/CardDetail'
import Button from './Components/Button/Button'
import './App.css'
import './index.css'
import DBCONFIG from './Config/Firebase/dbconfig'
import firebase from 'firebase/app'
import 'firebase/database'

function App() {

  const [flashcards,setFlashCards] = useState([])
  const [currentFlashCard, setCurrentFlashCard] = useState({
    front: "Card Question Placeholder",
    back: "Card Answer Placeholder",
  })
  const [app,setApp] = useState(null)
  const [database,setDatabase] = useState(null)

  return (
    <>
      <Header/>
      <CardDetail/>
    </>
  );
}

export default App;
