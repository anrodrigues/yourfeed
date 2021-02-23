import React, { useState }  from 'react'

import SideBar from  '../../components/sidebar/index'
import TopBar from  '../../components/topbar'
import HeaderTitle from '../../components/HeaderTitle'
import PostList from '../../components/postlist'

import api from '../../api'



export default function Home() {

    const [currentFeed, setcurrentFeed] = useState(
     
        {
            blogTitle: '',
            posts: []
    
        }
    ) 

    const [isLoading, setIsLoading] = useState(false)

    async function searchFeed(feedId:String) {
        setIsLoading(true)
        try {
            const result = await api.post(`/getPosts`, {feedId})
            console.log(result.data)
            setcurrentFeed(result.data)
            setIsLoading(false)
        } catch(e) {
            alert(e)
            setIsLoading(false)
        }
    }
 
    return (
        <>
            <SideBar searchAction={searchFeed} />

            <div className="contentWrapper">
                <TopBar/>
                <div className="wrapperBody">
                    <HeaderTitle text={currentFeed.blogTitle} isLoading={isLoading} />
                    <PostList posts={currentFeed.posts} status={isLoading} />
                </div>
              
            </div>
        </>
    )
}
