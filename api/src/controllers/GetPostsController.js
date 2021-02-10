const api = require('../axios')
// const search = require('../util/fakeSearch')

module.exports = {
    async index(req, res) {

        var feedId = req.body.feedId
        console.log(feedId)
       // feedId = 'feed/http://www.polygon.com/rss/index.xml'

        // const search = await api.get(`/search/feeds?query=${termToSearch}`)
        const search = await api.get(`/mixes/contents?streamId=${feedId}&count=10&hours=18&boostMustRead=true`)

         console.log(search.data.items)

        var returnOject = {
          blogTitle: search.data.title,
          posts: []
        }
        
        search.data.items.forEach(res => {
          let objectFiltered = {}
          objectFiltered.title = res.title
          objectFiltered.content = res.content
          objectFiltered.author = res.author
          objectFiltered.cover = 'visual' in res? res.visual.url : '';
          objectFiltered.origin = res.alternate[0].href

          returnOject.posts.push(objectFiltered)
        })
       
        res.send(returnOject)
      },
}