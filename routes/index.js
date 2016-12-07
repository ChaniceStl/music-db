const artist= require('./artist-router.js');
const song = require('./song-router.js');
const playlist = require('./playlist-router.js');

module.exports ={
	artistRouterFile: artist,
	songRouterFile: song,
	playlistRouterFile: playlist
}

//?: in the server it we guide it to the routes folder.
//and it defaults to this index.js file how are we able to file in the field with a value if we are not importing the 
//server file on this side..... i know we gave the fields there names in server so is it just taking the field empty and dragging it along until it find somethings to put in it?
