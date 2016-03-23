'use strict'

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('webviews/index', {
    title: 'Home'
  })
})

router.get('/about', function (req, res) {
  res.render('webviews/index', {
    title: 'About'
  })
})

router.get('/contact', function (req, res) {
  res.render('webviews/index', {
    title: 'Contact'
  })
})

module.exports = router
