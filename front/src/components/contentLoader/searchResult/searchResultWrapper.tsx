import React from 'react'

import SearchResult from '.'
import './style.scss'

export default function ContentSearchResultLoader() {
    return (
       <>
        <div className="SearchResultWrapper"><SearchResult/></div>
        <div className="SearchResultWrapper"><SearchResult/></div>
        <div className="SearchResultWrapper"><SearchResult/></div>
        <div className="SearchResultWrapper"><SearchResult/></div>
        <div className="SearchResultWrapper"><SearchResult/></div>

       </>
        
    )
}
