import { SavedFeedsContext } from 'context/savedFeedsContext';
import React, {useState, useContext} from 'react'

import './style.scss'

interface Props {
    feedId: string
    logo: string
    title: string
}

export default function ButtonFollow({feedId, logo, title}:Props) {
    const {feeds, setFeeds} = useContext(SavedFeedsContext)

    function followFeed(feedId:string, logo:string, title:string) {
        let feedToAdd = {
            title,
            feedId,
            logo
        }
       
        var currentFeed = localStorage.getItem('feeds');
        var FeedToUpdate = [];

        if(currentFeed !== null) {
            if (typeof currentFeed === 'string') {
                FeedToUpdate = JSON.parse(currentFeed);
            }
        }

        FeedToUpdate.push(feedToAdd)

        localStorage.setItem("feeds", JSON.stringify(FeedToUpdate))

        console.log(FeedToUpdate)
        setFeeds(feeds => [...feeds, feedToAdd])
    }
    return (
       <button className="ButtonFollow" onClick={() => followFeed(feedId, logo, title)}> Seguir </button> 
    )
}
