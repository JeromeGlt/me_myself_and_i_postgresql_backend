require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
// const path = require('path')

// const userRoutes = require('./routes/user')
// const movieRoutes = require('./routes/movie')

const app = express()

app.use(cors())
app.use(helmet())

app.use(express.json())

// app.use('/api/user')
// app.use('/api/movie')

module.exports = app