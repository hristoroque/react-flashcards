import React, { Fragment } from 'react'
import './progressbar.css'

function ProgressBar(){
    return (
        <Fragment>
            <p className="status">
                ## Completed
            </p>
            <div className="progress-bar">
                <div 
                className="current-progress"
                >
                </div>
            </div>
        </Fragment>
    )
}

export default ProgressBar