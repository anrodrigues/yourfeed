import React, { useContext } from "react";

import "./style.scss";
import Search from "../../../assets/search.svg";

import SideBodyItem from "../sidebodyitem";

import { Link } from "react-router-dom";
import { SavedFeedsContext } from "context/savedFeedsContext";

interface FeedItem {
  logo: string;
  title: string;
  feedId: string;
}

export default function SideBody() {
  const { savedFeed, setsavedFeed } = useContext(SavedFeedsContext);

  function removeFromStorage(feedId: string) {
    var currentFeed = localStorage.getItem("feeds");
    console.log(currentFeed);
    if (currentFeed !== null) {
      if (typeof currentFeed === "string") {
        var objCurrentFeed = JSON.parse(currentFeed).filter(
          (feed: FeedItem) => feed.feedId !== feedId
        );
        localStorage.setItem("feeds", JSON.stringify(objCurrentFeed));
      }
    }
  }

  function removeFeed(feedId: string): void {
    setsavedFeed(savedFeed.filter((feed) => feed.feedId !== feedId));
    removeFromStorage(feedId);
  }

  return (
    <div className="sidebarBody">
      <div className="sideTitle">
        <h2>Feeds</h2>

        <Link to="/search">
          <img src={Search} alt="search icon" />
        </Link>
      </div>

      {savedFeed.map((feed: FeedItem, i: number) => {
        return (
          <SideBodyItem
            removeFeed={removeFeed}
            key={i}
            FeedItems={feed}
          />
        );
      })}
    </div>
  );
}
