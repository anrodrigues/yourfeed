import React,{useState} from 'react'

import './style.scss'

import SidebarHeader from './sidebarheader';
import SideBody from './sidebody'
import TabIcon from './tabIcon';
interface Props {
    searchAction:(term: String) => Promise<void> 
}

export default function SideBar() {

    const [sidebarClosed, setsidebarClosed] = useState(false);

    function toggleMenu() {
        setsidebarClosed(!sidebarClosed);
    }

    return (
        <div className={sidebarClosed ? "sideBar closed": "sideBar "}>
          
            <SidebarHeader/>
            <TabIcon handleClick={toggleMenu}/>
            <SideBody/>
            
        </div>
    )
}
