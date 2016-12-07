const express = require('express');
const router = express.Router();
const Artist = require('../models/artist-model.js')

////////////////////////////
/////////FUNCTIONS//////////
////////////////////////////

//one//
const getAllArtist = (req,res) =>{
	Artist.findAll()
		.then(data => res.send(data))
		.catch(error => console.log('error'))
}

//two//
const getArtistId = (req,res) =>{
	Artist.findById(req.params.id)
		.then(data => res.send(data))
		.catch(error => {console.log('error'); res.send("Error")})
}

//three//
const postArtist = (req,res) => {
	Artist.create({
		name:req.body.name
	})
	.then(data => res.send(data))
	.catch(error => {console.log('error'); res.send("Error")})
}

//four//
const deleteArtistId = (req,res) => {
	Artist.findById(req.params.id)
		.then(artist => artist.destroy())
		.then(data => res.send(data));
		// .catch(error =>  res.send("Error"))
}

//five//
const updateArtistName = (req,res) => {
	Artist.findById(req.params.id)
		.then(artist => artist.update({name: req.params.newName}))
		.then(data => res.send(data))
		// .catch(error =>  res.send("Error"))

}

////////////////////////////
////////// ROUTES //////////
////////////////////////////

//one// && //three//
router.route('/')
	.get(getAllArtist)
	.post(postArtist)
//two// && //four//
router.route('/:id')
	.get(getArtistId)
	.delete(deleteArtistId)
//five//
router.route('/:id/:newName')
	.put(updateArtistName)

////////////////////////////
///////EXPORT ROUTES////////
////////////////////////////

// sending it to the index.js to allow server.js accessible to those routes
module.exports = router;




