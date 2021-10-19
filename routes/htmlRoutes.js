const express = require('express')
const router = express.Router()
const app = express()
const PORT = process.env.PORT || 3000
const fs = require('fs')
const path = require('path')

app.get('/', (req, res)=> {
    res.send(path.join(__dirname, '../public/index.html'))
})

module.exports = router