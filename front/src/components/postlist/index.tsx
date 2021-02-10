import React from 'react'
import Post from "../../models/interfaces/Post"

import  ContentBlogPostLoader from '../contentLoader/BlogPostWrapper'
import './style.scss'

import PostItem from './postItem'

interface Props {
    posts: Array<Post>
    status: boolean
}

export default function PostList({posts, status}:Props ) {
    return (
        <div className="postWrapper">
            {status? 
            (<ContentBlogPostLoader/>)
            :(
              posts.map((post) => <PostItem cover={post.cover} title={post.title} origin={post.origin}/> ) 
            )}
        
        </div>
    )
}
