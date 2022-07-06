import React, { useState, useEffect }  from 'react'
import Home from './pages/home'
import Search from './pages/search'
import SideBar from  './components/sidebar/index'
import api from 'api'
import { BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'

import { SavedFeedsContext, DEFAULT_VALUE } from './context/savedFeedsContext'

import  './theme/global.scss'
import 'app.scss'


function App(){

  useEffect(() => {
    var currentFeed = localStorage.getItem('feeds');
   

    if(currentFeed !== null) {
        if (typeof currentFeed === 'string') {
            setFeeds(JSON.parse(currentFeed));
         
        }
    } 
 
  }, [])

  const [currentFeed, setcurrentFeed] = useState(
     
    {
        blogTitle: '',
        posts: []

    }
  ) 




  const [feeds, setFeeds] = useState(DEFAULT_VALUE.feeds)
  const history = useHistory();
  async function searchFeed(feedId:String) {
 
 
    try {
        const result = await api.post(`/getPosts`, {feedId})
        console.log(result.data)
        setcurrentFeed(result.data)
        history.push('/home')
  
    } catch(e) {
      console.log(e)
    }
  
  }
  return (
    <div className="wrapper">
 
      <BrowserRouter>
      <SavedFeedsContext.Provider value={{ feeds , setFeeds }}>
      <SideBar searchAction={searchFeed} />
        <Switch>
   
          <Route path={'/'} exact={true} component={Home}/>
          <Route path={'/search'} exact={true} component={Search}/>
 
        </Switch>
        </SavedFeedsContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
