// 'use strict'

// // let db = require("../configs/postgresql"),
// //     sequelize = db.sequelize,
// //     Sequelize = db.Sequelize

// // const movieService = require('../services/movieService')
// const Movie = require('../models/movie')
// const movieController = {}

// /**
//  * Get all posts
//  *
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  */
// movieController.getAllMovies = (req, res) => {
//   Movie.findAll()
//   .then(movies => {res.json(movies)})
//   .catch(err => {res.status(404).send({message: 'Some error occurred while retrieving data.'})})
// }

// module.exports = movieController

/**
 * Post Controller
 */

'use strict'

// let db = require("../configs/postgresql"),
//     sequelize = db.sequelize,
//     Sequelize = db.Sequelize

const movieService = require('../services/movieService')

const movieController = {}

/**
 * Get all posts
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
movieController.getAllMovies = async (req, res) => {
    movieService.getAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(404).send({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}

module.exports = movieController