const logger = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const expressSwagger = require('express-swagger-generator')(app)

const options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0'
    },
    host: 'https://app2.testways.online/api-docs',
    basePath: '/',
    produces: [
      'application/json',
      'application/xml'
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: ''
      }
    }
  },
  basedir: __dirname, // App absolute path
  files: ['./routes/**/*.js'] // Path to the API handle folder
}
expressSwagger(options)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

require('custom-env').env()
require('./middleware')(app)
require('./routes')(app)

module.exports = app
