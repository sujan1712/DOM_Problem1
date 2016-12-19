'use strict'

const express = require('express')
const router = express.Router()

router.get ('/', (req, res) => {
  res.render('tip-calculator/index')
})  

module.exports = router
  