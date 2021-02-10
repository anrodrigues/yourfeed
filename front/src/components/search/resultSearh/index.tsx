import React, { useState } from 'react'

import './style.scss'

import SimpleFeed from '../../../models/interfaces/simpleFeed';
import ButtonFollow from '../../shared/buttonFollow';
import ContentSearchResultLoader from '../../contentLoader/searchResult/searchResultWrapper';

interface defaultProps {
    searchData: Array<SimpleFeed>
    isLoading: boolean
}

export default function ResultSearch({ searchData,isLoading }: defaultProps) {

    return (
        <div className="ResultSearch">

            {isLoading ?
                (<ContentSearchResultLoader />) 
                :
                (searchData.map(result => {

                    return <div className="ResultItem">

                        <div className="ResultLogo"> <img src={result.visualUrl} /> </div>
                        <div className="ResultContent">
                            <h2>{result.title} </h2>
                            <a href={result.website}>{result.website} </a>
                            <p>{result.description}</p>
                            <ButtonFollow feedId={result.feedId} logo={result.iconUrl} title={result.title} />
                        </div>
                    </div>

                }))
            }

        </div>
    )
}
