const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//artist is the name of the table
var Artist = sequelizeConnection.define("artist", {
	name: {
		type: Sequelize.STRING,
		validate: {
			len : [1 ,100]
		}
	}
})

module.exports = Artist;
