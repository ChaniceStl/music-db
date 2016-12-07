const express = require('express');
const router = express.Router();
//MODELS//
const Song = require('../models/song-model.js')
const Artist = require('../models/artist-model.js');
const Genre = require('../models/genre-model.js')


////////////////////////////
/////////FUNCTIONS//////////
////////////////////////////

//six//
const getAllSongs = (req,res) =>{
	Song.findAll({
		include: [Artist, Genre]
	})
		.then(data => res.send(data))
		.catch(error => console.log('error'))
}

//seven//
const getIdSong = (req,res) => {
	Song.findById(req.params.id)
		.then(data => res.send(data))
		.catch(error => res.send('error'))
}

//eight//

const createNewSong = (req,res) => {
	Song.create(
		{title: req.body.title,
		youtube_url: req.body.youtube_url
		})
		//the backend and the frontend communicate by string. so in postman we were given an array in the genre field of [1,2] and here we need to remove those strings. to read it.
		.then(song => song.addGenres(JSON.parse(req.body.genres)))
		.then(data => res.send(data))
		.catch(error => res.send('error'))
}

//nine//
const updateSong = (req,res) => {
	Song.update(
		{title:req.params.newTitle}, 
		{where:{
			id:req.params.id
		}
	})
		.then(data => res.send(data))
		.catch(error => res.send('error'))
}
//ten//
const deleteSong = (req,res) => {
	Song.destroy({
		where:{
			id: req.params.id
		}
	})
	.then(data => res.send(data))
	.catch(error => res.send('error'))
}

////////////////////////////
////////// ROUTES //////////
////////////////////////////

//six// && //eight//
router.route('/')
	.get(getAllSongs)
	.post(createNewSong)
//seven// && //ten//
router.route('/:id')
	.get(getIdSong)
	.delete(deleteSong)
//nine//
router.route('/:id/:newTitle')
	.put(updateSong)


	
////////////////////////////
///////EXPORT ROUTES////////
////////////////////////////

module.exports = router;
