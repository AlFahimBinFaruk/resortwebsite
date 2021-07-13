import React from 'react'
import loadinggif from '../images/gif/loading-arrow.gif'
export const Loading = () => {
    return (
        <div className="loading">
            <h4>Page is loading</h4>
            <img src={loadinggif} alt=""/>
        </div>
    )
}
