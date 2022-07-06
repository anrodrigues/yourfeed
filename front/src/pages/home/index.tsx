import React, { useState, useEffect, useContext } from "react";
import { CurrentFeedContext } from '../../context/currentFeedContext'
import { SavedFeedsContext } from '../../context/savedFeedsContext'

import HeaderTitle from "../../components/HeaderTitle";
import PostList from "../../components/postlist";

import api from "../../api";

export default function Home() {
  const [feedInfos, setfeedInfos] = useState({
    blogTitle: "",
    posts: [],
  });

  var savedFeeds = localStorage.getItem("feeds");
  const {currentFeed, setCurrentFeed} = useContext(CurrentFeedContext)
  const {savedFeed, setsavedFeed} = useContext(SavedFeedsContext)

  useEffect(() => {

    if(currentFeed.length > 0) {
      searchFeed(currentFeed)
    } else {
      searchFeed(savedFeed[0].feedId)
    }
    
  }, [currentFeed]);

  useEffect(() => {

    if(currentFeed.length > 0) {
      console.log('tem algo salvo')
      searchFeed(currentFeed)
    } else {
      searchFeed(savedFeed[0].feedId)
      console.log(savedFeed)
      console.log('não tem algo salvo tem que pegar do saved')
    }
    
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  async function searchFeed(feedId: String) {
   
    if(feedId.length > 0) {
      try {
        setIsLoading(true);
        const result = await api.post(`/getPosts`, { feedId });
        console.log(result.data);
        setfeedInfos(result.data);
        setIsLoading(false);
      } catch (e) {
        alert(e);
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      <div className="contentWrapper">
        <div className="wrapperBody">
          <HeaderTitle text={feedInfos.blogTitle} isLoading={isLoading} />
          <PostList posts={feedInfos.posts} status={isLoading} />
        </div>
      </div>
    </>
  );
}
