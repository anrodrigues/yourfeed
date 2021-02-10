const { Router } = require('express');

const SearchController = require('./controllers/SearchController');
const GetPostsController = require('./controllers/GetPostsController');

const routes = Router();

routes.post('/search', SearchController.index)

routes.post('/getPosts', GetPostsController.index)

module.exports = routes;

 