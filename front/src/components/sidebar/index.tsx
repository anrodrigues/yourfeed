import React from 'react'

import './style.scss'

import SidebarHeader from './sidebarheader';
import SideBody from './sidebody'
import TabIcon from '../shared/tabicon'

interface Props {
    searchAction:(term: String) => Promise<void> 
}

export default function SideBar({searchAction}:Props) {
    return (
        <div className="sideBar">
          
            <SidebarHeader/>
            <SideBody searchAction={searchAction}/>
            
        </div>
    )
}
