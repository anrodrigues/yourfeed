import {createContext} from 'react';

interface feedSimple {
    logo: string
    title: string
    feedId: string
}

type feed = Array<feedSimple>
   
type SavedFeedsContext = {
    savedFeed: feed,
    setsavedFeed: React.Dispatch<React.SetStateAction<feed>>
}

export const DEFAULT_VALUE_SAVED_FEEDS = {
    savedFeed: [
        {
            logo: "",
            title: "",
            feedId: ""
        }
    ],
    setsavedFeed: () => {}
}

export const SavedFeedsContext = createContext<SavedFeedsContext>(DEFAULT_VALUE_SAVED_FEEDS);