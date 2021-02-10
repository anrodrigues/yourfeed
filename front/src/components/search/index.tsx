import React,{ useState } from 'react'

import './style.scss'

import SearchIcon from '../../assets/search.svg'

interface Props {
    searchTerm:(term: String, e: React.FormEvent<HTMLFormElement>) => Promise<void> 
}

export default function Search({searchTerm}:Props) {
    const [term, setTerm] = useState('')

    return (
            <>
                <div className="searchWrapper">
                    <form onSubmit={(e) => searchTerm(term, e)}>
                        <input type="text" onChange={event => setTerm(event.target.value)} placeholder="Procure um termo ou assunto para seguir" />
                        <img src={SearchIcon} alt="search icon"/>
                    </form>
                </div>
            </>
    )
}
