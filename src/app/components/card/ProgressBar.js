import React from 'react'
import './ProgressBar.css'

function ProgressBar({current, total}){
    return (
        <>
            <p className="status">
                {current}/{total} Completed
            </p>
            <div className="progress-bar">
                <div 
                className="current-progress"
                style={{width: `${100*(current/total)}%`}}
                >
                </div>
            </div>
        </>
    )
}

export default ProgressBar