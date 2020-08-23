import React,{useState, useContext} from 'react'
import {ThemeContext} from '../theme/Theme'
import './Button.css'

function Button({title, action}){
    const theme = useContext(ThemeContext)
    const [style, setStyle] = useState(theme.primary)

    return (
        <button 
            className="button"
            onClick={action} 
            onMouseEnter={()=>setStyle(theme.primaryHover)}
            onMouseLeave={()=>setStyle(theme.primary)}
            style={style}>
            {title}
        </button>
    )
}

export default Button