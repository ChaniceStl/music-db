const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

const routes = require('./routes')
const artistRouterFile = routes.artistRouterFile
const songRouterFile = routes.songRouterFile
const playlistRouterFile = routes.playlistRouterFile
const genreRouterFile = routes.genreRouterFile



//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//listen on port 9999
app.listen('9999', () => console.log('Listening on port 9999'));

//allows the frontend to be accessable when ask to look into the bundle.js it will ask here.
// app.use(express.static(path.join(__dirname, '/front/bundle')));




app.use('/api/artists', artistRouterFile);
app.use('/api/songs', songRouterFile);
app.use('/api/playlists', playlistRouterFile);
app.use('/api/genres', genreRouterFile);


//this will basically make your express server send back your React frontend app (which is loaded when you send index.html) whenever anyone navigates to any URL that's not caught by your API.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/index.html'));
});