import React,{useContext} from 'react'
import {ThemeContext} from '../theme/Theme'
import './Header.css'

function Header(){
    const theme = useContext(ThemeContext)

    return (
        <header 
            className="header"
            style={theme.primary}>
            <h1>Flashcards App</h1>
        </header>
    )
}

export default Header;