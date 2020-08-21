import React,{useState} from 'react'
import Card from './Card'
import ProgressBar from './ProgressBar'
import './CardDetail.css'
import Button from '../Button/Button'

function CardDetail(){
    const [hidden,setHidden] = useState(false)

    return (
        <main className="main-content">
            <Card 
                front="Card Question Placeholder"
                back="Card Answer Placeholder"
                hidden={hidden}
            />
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