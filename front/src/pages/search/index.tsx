import React, { useState, useContext} from 'react'

import TopBar from  '../../components/topbar'
import HeaderTitle from '../../components/HeaderTitle'
import Searh from '../../components/search';
import ResultSearch from '../../components/search/resultSearh'

import api from '../../api'

export default function Home() {
    const [search, setSearch] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function searchTerm(term:String,  e: React.FormEvent<HTMLFormElement>) {
        setIsLoading(true)
        e.preventDefault()
        try {
          const result = await api.post(`/search`, {term})
          console.log(result.data)
          setSearch(result.data)
          setIsLoading(false)
        } catch(e) {
           alert(e)
           setIsLoading(false)
        }
    }

    return (
        <>
            <div className="contentWrapper">
                <TopBar/>
                <div className="wrapperBody">
                    <HeaderTitle text="Descubra o melhor conteúdo de qualquer tópico."/>
                    <Searh searchTerm={searchTerm}/>
                    <ResultSearch searchData={search} isLoading={isLoading}/>
                </div>
              
            </div>
        </>
    )
}
