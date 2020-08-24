import React,{useState} from 'react'
import Card from './Card'
import ProgressBar from './ProgressBar'
import './CardDetail.css'
import Button from '../button/Button'

function CardDetail({flashCards, currentFlashCard}){
    const [hidden,setHidden] = useState(false)

    return (
        <main className="main-content">
            { currentFlashCard &&
                <Card 
                    front={currentFlashCard.front}
                    back={currentFlashCard.back}
                    hidden={hidden}
                />
            }
            <ProgressBar 
                current={10}
                total={20}
            />
            <Button
            title="Mostrar"
            action={()=>setHidden(!hidden)}
            />
        </main>
    )
}

export default CardDetail