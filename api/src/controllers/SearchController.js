const api = require('../axios')
// const search = require('../util/fakeSearch')

module.exports = {
    async index(req, res) {

        var termToSearch = req.body.term
        // const search = await api.get(`/search/feeds?query=${termToSearch}`)
        const search = await api.get(`/search/feeds?q=${termToSearch}`)
        
        console.log(search)
        // console.log(search.result.results)

        var returnOject = []
        
        if(search.data !== 'undefined' || search.data !== null  ) {
          search.data.results.forEach(res => {
            let obrectFiltered = {}
            obrectFiltered.feedId = res.feedId
            obrectFiltered.websiteTitle = res.websiteTitle
            obrectFiltered.title = res.title
            obrectFiltered.website = res.website
            obrectFiltered.iconUrl = res.iconUrl
            obrectFiltered.visualUrl = res.visualUrl
            obrectFiltered.description = res.description
  
            returnOject.push(obrectFiltered)
          })
        } else {
          res.error('No data retrieved');
        }
             
        res.send(returnOject)
    },
}