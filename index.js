const express = require('express')
const app = express()
const router = require('./routers/router')
const port = 8080

app.use('/', router)

app.listen(port, () => {
    console.log('express server is working successfully')
})