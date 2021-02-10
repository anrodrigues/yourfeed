import React from 'react'

import HeaderTitleLoader from '../contentLoader/HeaderTitle'

import './style.scss'

interface Props {
    text: string
    isLoading?: boolean
}

export default function HeaderTitle({text, isLoading}:Props) {
    return(
       <>
            {isLoading? 

                (<HeaderTitleLoader/>)
                :
                (
                <h1 className="TitlePage">
                    {text}
                </h1>

                )
            }
        </>
    )
}
