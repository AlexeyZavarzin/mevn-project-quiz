const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || config.port,
    () => console.log('Server start on port ${config.port}...'))
