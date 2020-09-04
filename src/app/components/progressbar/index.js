import React, { Fragment } from 'react'
import './progressbar.css'

function ProgressBar({remaining,total}){
    return (
        <Fragment>
            <p className="status">
                {total-remaining}/{total} Completed
            </p>
            <div className="progress-bar">
                <div 
                className="current-progress"
                style={{width: `${100*(total-remaining)/total}%`}}
                >
                </div>
            </div>
        </Fragment>
    )
}

export default ProgressBar