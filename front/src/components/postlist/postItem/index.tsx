import React, { useState } from 'react'

import Post from '../../../models/interfaces/post';

import CoverDefault from '../../../assets/feed-icon.png';

import './style.scss'

   

export default function PostItem({cover, title, feedId, origin}:Post) {

    const [hasError, setHasError] = useState(false)
    
    const setError = (e:React.SyntheticEvent<HTMLImageElement, Event>) => {
        setHasError(true)
    }

    return (
        <div className="card">
            <a href={origin} target="_blank">
                <img onError={(e)=> setError(e)} src={ hasError ? CoverDefault : cover } alt="cover post"/>
                <p>{title}</p>
            </a>
        </div>  
    )
}
