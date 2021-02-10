import React from 'react'
import { FiTrash } from "react-icons/fi";

import './style.scss'

interface Props {
    FeedItems : {
        logo: string
        title: string
        feedId: string
    },
    
    searchAction:(term: String) => Promise<void> 
    removeFeed: (feedId:string) => void
}

const SideBodyItem: React.FC<Props>  = ({FeedItems, searchAction, removeFeed}) => {
    return (
        <div className="sidebarBodyItem" onClick={() => searchAction(FeedItems.feedId)}>
            <div className="sidebarItemWrapper">
                <img src={FeedItems.logo} alt=""/>
                <p>{FeedItems.title}</p>
            </div>
            <div className="deleteItem" onClick={() => removeFeed(FeedItems.feedId)}>
                <FiTrash/>
            </div>
        </div>
    )
}

export default SideBodyItem;
