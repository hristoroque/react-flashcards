import React,{createContext} from 'react'

const primaryColor = '#1F1A38';

const theme = {
    dark: {
        primary: {
            backgroundColor: '#1F1A38',
            color: 'white',
        },
        primaryHover: {
            backgroundColor: '#7B506F',
            color: 'white',
        }
    }
}
const ThemeContext = createContext(theme.dark)

function Theme({children}){
    return (
        <ThemeContext.Provider value={theme.dark}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext}
export default Theme