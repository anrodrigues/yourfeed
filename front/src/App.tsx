import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Search from "./pages/search";
import SideBar from "./components/sidebar/index";
import TopBar from "components/topbar";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import {
  SavedFeedsContext,
  DEFAULT_VALUE_SAVED_FEEDS,
} from "./context/savedFeedsContext";

import {
  CurrentFeedContext,
  DEFAULT_VALUE_CURRENT_FEED,
} from "./context/currentFeedContext";

import "./theme/global.scss";
import "app.scss";

function App() {

  var savedFeeds = localStorage.getItem("feeds");
  var trustedFeed ;

  if (savedFeeds !== null) {
    if (typeof savedFeeds === "string") {
      trustedFeed = JSON.parse(savedFeeds)
    }
  } else {
    trustedFeed =  DEFAULT_VALUE_SAVED_FEEDS.savedFeed
  }

  const [savedFeed, setsavedFeed] = useState((trustedFeed));
  const [currentFeed, setCurrentFeed] = useState(DEFAULT_VALUE_CURRENT_FEED.currentFeed);

  useEffect(() => {
    if (savedFeeds !== null) {
      if (typeof savedFeeds === "string") {
        setsavedFeed(JSON.parse(savedFeeds));
      }
    }
  }, []);


  return (
    <div className="wrapper">
      <BrowserRouter>
        <SavedFeedsContext.Provider value={{ savedFeed, setsavedFeed }}>
          <CurrentFeedContext.Provider value={{ currentFeed, setCurrentFeed }}>
            <SideBar/>
            <TopBar />
            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/search"} exact={true} component={Search} />
            </Switch>
          </CurrentFeedContext.Provider>
        </SavedFeedsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
