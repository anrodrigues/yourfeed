import React, { useContext } from "react";
import { CurrentFeedContext } from '../../../context/currentFeedContext'
import { useHistory } from 'react-router-dom';

import { FiTrash } from "react-icons/fi";

import "./style.scss";
interface Props {
  FeedItems: {
    logo: string;
    title: string;
    feedId: string;
  };

  removeFeed: (feedId: string) => void;
}

const SideBodyItem: React.FC<Props> = ({
  FeedItems,
  removeFeed,
}) => {
  const history = useHistory();
  const {currentFeed, setCurrentFeed} = useContext(CurrentFeedContext)

  function handleCurrentFeed(feedId: string) {
    setCurrentFeed(feedId)
    history.push("/");
  }

  return (
    <div
      className="sidebarBodyItem"
      onClick={() => handleCurrentFeed(FeedItems.feedId)}
    >
      <div className="sidebarItemWrapper">
        <img src={FeedItems.logo} alt="" />
        <p>{FeedItems.title}</p>
      </div>
      <div className="deleteItem" onClick={() => removeFeed(FeedItems.feedId)}>
        <FiTrash />
      </div>
    </div>
  );
};

export default SideBodyItem;
