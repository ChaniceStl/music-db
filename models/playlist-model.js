const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
//Model//
const Song = require('./song-model.js')

var Playlist = sequelizeConnection.define('playlist', {
	title:{
		type:Sequelize.STRING,
		validate:{
			len: [1, 100]
		}
	}
});

Playlist.belongsToMany(Song, {through: 'playlist_songs'});
Song.belongsToMany(Playlist, {through: 'playlist_songs'});

module.exports = Playlist;