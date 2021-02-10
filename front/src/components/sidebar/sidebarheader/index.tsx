import React from 'react'

import './style.scss'
import Logo from '../../../assets/logo.png';

import { Link } from 'react-router-dom'
export default function SidebarHeader() {
    return (
        <div className="sidebarHeader">
            <Link to="/">
                <img src={Logo} alt="Logo Your Feed"/>
            </Link>
        </div>
    )
}
