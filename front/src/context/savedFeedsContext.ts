import {createContext} from 'react';

interface feedSimple {
    logo: string
    title: string
    feedId: string
}

type feed = Array<feedSimple>
   
type SavedFeedsContext = {
    feeds: feed,
    setFeeds: React.Dispatch<React.SetStateAction<feed>>
}

export const DEFAULT_VALUE = {
    feeds: [
        {
            logo: "",
            title: "",
            feedId: ""
        }
    ],
    setFeeds: () => {}
}

export const SavedFeedsContext = createContext<SavedFeedsContext>(DEFAULT_VALUE);