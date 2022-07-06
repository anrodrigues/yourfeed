import {createContext} from 'react';

type feed = string
   
type CurrentFeedContext = {
    currentFeed: feed,
    setCurrentFeed: React.Dispatch<React.SetStateAction<feed>>
}

export const DEFAULT_VALUE_CURRENT_FEED = {
    currentFeed: "", 
    setCurrentFeed: () => {}
}

export const CurrentFeedContext = createContext<CurrentFeedContext>(DEFAULT_VALUE_CURRENT_FEED);