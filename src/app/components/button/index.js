import React from 'react'

import './button.css'

function Button({title, action}){
    return (
        <button 
            className="button"
            onClick={action} 
        >
            {title}
        </button>
    )
}

export default Button