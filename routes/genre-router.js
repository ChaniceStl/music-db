const express = require('express');
const router = express.Router();
const Genre = require('../models/genre-model.js')

///////////////////
///FUNCTIONS///////
///////////////////

//fifteen//
const getGenreAZ = (req,res) => {
	Genre.findAll({
		order: ['title']
	})
	.then(data => res.send(data))
	.catch(error => res.send('error'))
}

//sixteen//
const getGenreId = (req,res) => {
	Genre.findById(req.params.id)
		.then(data => res.send(data))
		.catch(error => res.send('error'))
}

//seventeen//
const createGenre = (req,res) => {
	Genre.create({title:req.body.title})
		.then(data => res.send(data))
		.catch(error => res.send('error'))
}
//eighteen//
const updateGenre = (req,res) => {
	Genre.update(
	{title:req.params.newGenre},
	{where:{
		id: req.params.id
	}
  })
}


///////////////////
/////ROUTES////////
///////////////////

//fifteen// && //seventeen//
router.route('/')
	.get(getGenreAZ)
	.post(createGenre)
//sixteen//
router.route('/:id')
	.get(getGenreId)
//eighteen//
router.route('/:id/:newGenre')
	.put(updateGenre)


///////////////////
/////EXPORTS///////
///////////////////
module.exports = router; 


// /api/genres/:id/:newGenre PUT (update) a specific genre's name