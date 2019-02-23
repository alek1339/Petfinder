const express = require('express')
const router = express.Router()

// TEST
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }))

module.exports = router
