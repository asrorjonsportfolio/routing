const express = require('express')
const router = express.Router()

// root(main) page
router.get('/', (req, res) => {
    res.send('express server is working successfully')
})
// POST method route
router.post('/', (req, res) => {
    res.send('POST request to the homepage')
})
// GET method route
router.get('/about', (req, res) => {
    res.send('I`m Asrorjon Mukhtorov. I want to be a nodeJS developer')
})
router.get('/:user', (req, res) => {
    const {user} = req.params
    res.send(`welcome to ${user}'s page`)
})

module.exports = router