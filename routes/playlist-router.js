const express = require('express');
const router = express.Router();
//Model//
const Playlist = require('../models/playlist-model.js');
const Song = require('../models/song-model.js')

///////////////
//FUNCTION/////
///////////////

//eleven//
const getPlaylist = (req,res) => {
	Playlist.findAll({
		include:[Song]
	})
	.then(data => res.send(data))
	.catch(error => res.send('error'));
}

//twevle//
const getIdPlaylist = (req,res) => {
	Playlist.findById(req.params.id)
		.then(data => res.send(data))
		.catch(error => res.send('error'));
}

//thirteen//
const createPlaylist = (req,res) =>{
	Playlist.create({title: req.body.title})
	//need to understand this a little more 
		.then(playlist => playlist.addSongs(JSON.parse(req.body.songs)))
		.then(data => res.send(data))
		.catch(error => res.send('error'))
}

//fourteen//
const deletePlaylist = (req,res) => {
	Playlist.destroy({
		where:{
			id: req.params.id
		}
	})
	.then(data => res.send(data))
	.catch(error => res.send('error'))
}

///////////////
///ROUTES//////
///////////////

//eleven// && //thirteen//
router.route('/')
	.get(getPlaylist)
	.post(createPlaylist)
//twevle// && //fourteen//
router.route('/:id')
	.get(getIdPlaylist)
	.delete(deletePlaylist)


///////////////
//EXPORTS//////
///////////////
module.exports = router;

