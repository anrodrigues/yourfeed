import React from 'react'
import './style.scss'

import Icon from '../../../assets/tabIcon.svg'

interface Props {
    handleClick:() => void
}

export default function TabIcon({handleClick}:Props) {
     
    return (

        <img onClick={handleClick} className="tabWrapper" src={Icon} alt="click togle menu"/>
  
    )
}
