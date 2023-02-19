/**
 * Post Service
 */

'use strict'

// const db = require('../configs/postgresql')
const models = require("../models")

const movieService = {}

movieService.getAll = async () => {
    return models.Movie.findAndCountAll({
        order: [
            ['id', 'ASC'],
        ],
    })
}

module.exports = movieService