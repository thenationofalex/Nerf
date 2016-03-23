'use strict'

const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(express.static(path.join(__dirname, 'public')))

const webviews = require('./app/Server/Routes/')

app.use('/', webviews)

// --- Start Server
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
  cluster.on('online', function (worker) {
    console.log('Worker ' + worker.process.pid + ' is online')
  })
  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker ${worker.process.pid} died')
    cluster.fork()
  })
} else {
  app.listen(3000, function () {
    console.log('Nerf Running')
  })
}
